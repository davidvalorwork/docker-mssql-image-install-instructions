# INSTRUCTIONS FOR THE IMAGE BY DAVID VALOR - 27/01/2021

1. Install docker and docker compose.
2. Execute "docker-compose ps"
3. Execute "docker-compose up -d" // Downloading the image.
4. Execute "docker-compose ps" // See what are the images running.
5. Execute "docker-compose logs" // See the logs.
6. Execute "docker-compose down" // Instance goes down.
7. Execute "docker-compose ps" // See the instances.
8. Execute "docker-compose up -d" // Up the instance.
9. Execute "docker-compose ps" // See the instance avaibles.
10. Run "node index.js" // Execute the script for see if mssql avaible.
11. Execute "docker exec -it sql-server-db "bash"" // For enter in the bash of the image.
12. Execute "/opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P super_duper_password" // For enter in the mssql console.
13. Execute "select name from sys.Databases;" "go" // For consulting the databases.
14. Execute ".Databases" "go" // For see the databases avaible.
15. Execute "create database testdb" "go" // For creating a database.
16. Execute "use testdb" "go" // For use that db.
17. Execute "create table (id INT, name NVARCHAR(50), email NVARCHAR(255));" "go" // Create a table.
18. Execute "insert into users value(1,'Bill Gates', 'bill.gates@microsoft.com');" "go" // Create bill gate user.
19. Execute the node js script.


## REQUIREMENTS

1. 2GB of ram only for docker.
2. Linux, Mac or Windows system.
3. Port 1433 open.
