const connection = mySQL.createConnection(
    {
        host: "localhost",
        user: "root", //CHANGE
        password: "ralph", //CHANGE
        database: "testoutofline"
    }
);

try {
    connection.connect();
    console.log("Connection success!");
} catch (error) {
    throw error
}