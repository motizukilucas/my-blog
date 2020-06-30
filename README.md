# Motizuki's Blog

## Running the project
@@@@ SET UP .ENV @@@@

After you have configured your .env file, navigate to the project folder, then type in the following command in the terminal to run the application:
    docker-compose up

At this point WordPress should be running at port 80. Open [http://localhost:80](http://localhost:80) in a browser to access the application.
> **Note:** The WordPress site is not immediately available on port 80 because the containers are still being initialized and may take a couple of minutes before the first load.

> ### Useful links
> - [http://localhost:80/wp-admin/](http://localhost:80/wp-admin/)

Finish setting up by filling up the fields asked by WordPress with the blog's details.

## Shutdown and cleanup
The command bellow removes the containers but preserves your WordPress database.
    docker-compose down
> Actually it preserves the volume. Since the only volume is the database, it preserves it

To remove both containers and the database, run:
    docker-compose down --volumes
> It actually removes the volumes

## Backup
    docker run --rm --volumes-from [CONTAINER_ID] -v $(pwd):/backup ubuntu tar cvf /backup/backup.tar [VOLUME_LOCATION]
> VOLUME_LOCATION example: /var/lib/mysql

## Restore
    docker run --rm --volumes-from [CONTAINER_ID] -v $(pwd):/backup ubuntu bash -c "cd [VOLUME_LOCATION] && tar xvf /backup/backup.tar --strip 1"
> Here the CONAINER_ID is the new container you want to input the data
> And the VOLUME_LOCATION is the location of the new volume

## Usefull commands
> - `mysqldump [OPTIONS] -p`

## Pretty sure this is the working backup and restore method. @TODO next time backing up check and fix this documentation
sudo docker exec 5214275e7a40 /usr/bin/mysqldump -u root --password=root wordpress > backup.sql
cat backup3.sql | sudo docker exec -i 4415ed64d3eb /usr/bin/mysql -u root --password=root wordpress
> wordpress is the database name

## Connecting to the server
 ssh -i ~/Downloads/MotizukiBlog.pem ubuntu@ec2-18-225-33-202.us-east-2.compute.amazonaws.com