# Motizuki's Blog

## Running the project
@@@@ SET UP .ENV @@@@

After you have configured your .env file, navigate to the project folder, then type in the following command in the terminal to run the application:
    docker-compose up

At this point WordPress should be running at port 8000. Open `http://localhost:8000` in a browser to access the application.
> **Note:** The WordPress site is not immediately available on port 8000 because the containers are still being initialized and may take a couple of minutes before the first load.

Finish setting up by filling up the fields asked by WordPress with the blog's details.

## Shutdown and cleanup
The command bellow removes the containers but preserves your WordPress database.
    docker-compose down

To remove both containers and the database, run:
    docker-compose down --volumes