<?php

namespace App\Services;


class AddressBookService
{
    protected $data = [];

    public function __construct()
    {
        $this->loadData();
    }

    protected function getDataFilePath()
    {
        return  __DIR__ . '/../data/AddressBook.json';
    }

    protected function loadData()
    {
        $path = $this->getDataFilePath();

        if (!file_exists($path)) {
            file_put_contents($path, json_encode([]));
            return;
        }

        $content = file_get_contents($path);
        $this->data = (array) json_decode($content);
    }

    public function createRecord(string $firstName, string $lastName, string $phone, string $email)
    {
        $id = uniqid();

        $record = [
            'first_name' => $firstName,
            'last_name' => $lastName,
            'phone' => $phone,
            'email' => $email,
        ];

        $this->data[$id] = $record;
        $this->updateData();

        return $record;
    }

    public function editRecord($id, string $firstName, string $lastName, string $phone, string $email)
    {
        $record = [
            'first_name' => $firstName,
            'last_name' => $lastName,
            'phone' => $phone,
            'email' => $email,
        ];

        $this->data[$id] = $record;
        $this->updateData();

        return $record;
    }

    public function getIndexById($id)
    {
        foreach ($this->data as $index => $record) {
            if ($record->id == $id) {
                return $index;
            }
        }
    }

    public function deleteRecord($id)
    {
        unset($this->data[$id]);
        $this->updateData();
    }

    protected function updateData()
    {
        file_put_contents($this->getDataFilePath(), json_encode($this->data));
    }

    public function getAllAdresses(): array
    {
        return $this->data ?? [];
    }

    public function getAllAdressesAsArray(): array
    {
        $arr = [];

        foreach ($this->getAllAdresses() as $key => $value) {
            $value->id = $key;
            $arr[] = (array) $value;
        }

        return $arr;
    }
}
