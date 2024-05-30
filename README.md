Requirements
Node version 21.2.0
------------------------------------------------

Download the project files and run in main folder:

npm install
------------------------------------------------

For compiling the css you need to run in its own window a tailwindcss watch:
(For this project we use Tailwindcss)

npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
------------------------------------------------

To start the server run:

npm start
------------------------------------------------

Vending machine uses endpoint to get the product feed from mockfly

https://api.mockfly.dev/mocks/a3c3d30f-2ffd-491f-af1c-a4c2ebaca096/products
------------------------------------------------

Currency used - US dollar
You can insert 0.5 / 1 / 2 dollar coins
15 products are generated
We have 1 fixed window for vending controls and 1 fixed button for the modal pop up cart.

Additional CRUD operations can be achieved simillar to the way get our proudcts (POST,PUT,UPDATE,DELETE)

For the design we use flex classes in order the have responsive design.