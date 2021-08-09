<?php

namespace App\AddressBook;

require_once(__DIR__ . '/../Services/AddressBookService.php');

use App\Services\AddressBookService;


class AddNewEntry
{
    protected AddressBookService $addressBookService;

    public function __construct()
    {
        $this->addressBookService = new AddressBookService;
    }

    public function handle()
    {
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Headers: access");
        header("Access-Control-Allow-Methods: POST");
        header('Content-Type: application/json');
        if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
            header("Access-Control-Allow-Methods: POST, OPTIONS");
            header("Access-Control-Allow-Headers:*");
            exit(0);
        }

        $data = json_decode(file_get_contents("php://input"));

        $firstName = $data->first_name;
        $lastName = $data->last_name;
        $phone = $data->phone;
        $email = $data->email;

        $record = $this->addressBookService->createRecord(
            $firstName, $lastName, $phone, $email
        );

        return json_encode([
            'success' => true,
            'record' => $record
        ]);
    }
}


echo (new AddNewEntry)->handle();
