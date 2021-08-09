<?php

namespace App\AddressBook;

require_once(__DIR__ . '/../Services/AddressBookService.php');

use App\Services\AddressBookService;


class ListAddressBook
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
        header("Access-Control-Allow-Methods: GET");
        header("Access-Control-Allow-Credentials: true");
        header('Content-Type: application/json');


        $data = $this->addressBookService->getAllAdressesAsArray();
        return json_encode($data);
    }
}


echo (new ListAddressBook)->handle();
