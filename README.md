# Mongo APP

In summary :

This is a project that aims to create a graphical interface to test queries on data stored under MongoDB.

The data in question is in the "data" folder, it is a json file named cities.json which contains all the cities of the world.

The built-in features for now are:

- Search cities based on parameters (name, country, population, timeZone)
- Search for cities closest to you based on your coordinates (longitude, latitude)
- Add a city to the database
- Filter your searches with the name of the city
- Sort cities by population
- Very simple display of cities in the form of a table


### Prerequisites

1 - NodeJS and Mongo DB must be installed

2 - Import cities.json in your mongoDB with the following command:
    mongoimport --db ZIPS --collection cities --file path/cities.json

3 - Mongod must be launched (connection open)

### Installing

1 - Open a command prompt in the folder project

2 - Run the following commands :
```
npm install
node index.js
```
3 - Open your browser and go to : 
```
localhost:4000/index.html
```


## Built With

* [Dropwizard](https://reactjs.org/) - Front-end : ReactJS
* [Maven](https://nodejs.org/) - Back-end : NodeJS
* [ROME](https://getbootstrap.com/) - Design : Bootstrap, CSS 
* [ROME](https://www.mongodb.com) Database : Mongo DB, GUI : Studio 3T


## Screenshots

![screenshot1](https://raw.githubusercontent.com/MiguelRamosF/AppMongo/master/img/Capture06.JPG)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details