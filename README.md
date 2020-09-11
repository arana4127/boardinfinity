#ToDo Rest API

Day1 -10/09/2020:
Recieved the project details, did initial setup of the project by running npm init, installed express,body-parser and mongoose packages
Specified the schema(TodoSchema) and two routes(/add-for adding data and /list -for viewing data) along with custom document expiry after the specified duration in seconds.
Used MonogoDB Atlas for database and Heroku for deployment purpose.

Day2- 11/09/2020:
Did few changes in custom document expiry.

-------------------------------------------------------------------Testing Purpose Only---------------------------------------------------
At route https://boiling-eyrie-36093.herokuapp.com/add you can specify following                                                                                           
     taskName: String, description: String, creator: String, duration: Number. You can use POST method to post at this route using Postman.                    
                                                                                                                                                          
At route https://boiling-eyrie-36093.herokuapp.com/list you can view the added data. The data will expire after the specified duration.


