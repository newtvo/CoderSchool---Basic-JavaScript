/**
 * Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại, có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) hoặc 1 phần số điện thoại 
 *  (HASN'T FULLY IMPLEMENTED FOR THE SEARCH CONTACT)   
 */
var fs = require('fs');
var readlineSync = require('readline-sync');

var contacts = [];

// loadData function to load the data into array
function loadData() {
  var fileContent = fs.readFileSync('./data.json');
  contacts = JSON.parse(fileContent);
}

// showContact function allow users to see all contact
function showContact() {
  for ( var contact of contacts) {
    console.log(contact.name, contact.number);
  }
}

// saveFile function to save a file when add new contact or delete contact
function saveFile() {
  var content = JSON.stringify(contacts);
  fs.writeFileSync('./data.json', content, { encoding : 'utf8' });
}

// addNewContact to create new contact in the contact list
function addNewContact() {
  var name = readlineSync.question('Name: ');
  var number = readlineSync.question('Number: ');
  var contact = {
    name : name,
    number : parseInt(number)
  }

  contacts.push(contact);
  saveFile();

  showContact();
}

// edit the desired contact
function editContact() {
  var editContact = readlineSync.question('Choose the contact you wish to edit: ');
  var editName = readlineSync.question('Name: ');
  var editNumber = readlineSync.question('Number: ');

  contacts[parseInt(editContact)].name = editName;
  contacts[parseInt(editContact)].number = parseInt(editNumber);
  
  saveFile();
  showContact();
}

// delete the desired contact
function deleteContact() {
  var deleteContact = readlineSync.question('Choose the contact you wish to delete: ');
  var option = parseInt(deleteContact);
  contacts.splice(option, 1);

  saveFile();
  showContact();
}

// search for wanted contact
function searchContact() {
  var searchContact = readlineSync.question('Choose the contact you wish to search: ');
  for (var contact of contacts) {
    if (contact.name == searchContact || contact.number == parseInt(searchContact)) {
      console.log(contact.name, contact.number);
    }
  }
}

// show the menu for user to choose
function showMenu() {
  loadData();
  console.log('1. Nhập dữ liệu contact(name, phone number)');
  console.log('2. Sửa dữ liệu contact');
  console.log('3. Xóa contact');
  console.log('4. Tìm kiếm contact');

  var option = readlineSync.question('> ');
  switch (option) {
    case '1':
     addNewContact();
     showMenu();
     break;
    case '2':
     editContact();
     showMenu();
     break;
    case '3':
     deleteContact();
     showMenu();
     break;
    case '4':
     searchContact();
     showMenu();
     break;
    default:
     console.log('Option Unavailable');
     showMenu();
     break;
  }
}


function main() {
  showMenu();
  

}

main();