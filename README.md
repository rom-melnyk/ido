# Set Goals and track Achievements with iDo


## Technical stack

- NodeJS,
- TypeScript,
- ExpressJS,
- TypeORM,
- MySQL.


## Install and setup

### MySQL setup

1. Install MySQL 5.7.x: `sudo apt-get install mysql-server`
   - Don't forget `sudo mysql_secure_installation` on Production!
1. Create the user and the database:
   - `mysql -uroot -p`  and enter your root password.  
      This usually requires `sudo` privileges.
   - Perform following commands (replace `%USER%` and `%PASSWORD%` with actual data):

        ```sql
        use mysql;
        create user if not exists '%USER%'@'localhost' identified by '%PASSWORD%';
        grant all privileges on ido.* to '%USER%'@'localhost' with grant option;
        flush privileges;
        exit;
        ```

       **Expected:** database `ido` to be created and accessible when logging in to MySQL with credentials from the above.

### App setup

1. Clone the project from the GitHub.
1. Run `npm install`.
1. Create `server/creds.js` using the shape and the example of `server/creds.interface.ts`.  
   Take the credentials from previous step into accounting.
1. Run DB migrations: `npm run orm -- migration:run`.
1. Check `npm run` for other possibilities (e.g. `server:dev`).


## Technical notes

1. For the sake of consistency all the config files are JS with `module.exports = {...};`. Other config integrates hard into TypeORM CLI.


## Credits

Roman Melnyk <https://melnyk.site>
