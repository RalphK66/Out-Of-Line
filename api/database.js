const connection = mySQL.createConnection(
    {
        host: "localhost",
        user: "root", //CHANGE
        password: "root", //CHANGE
        database: "testoutofline"
    }
);

try {
    connection.connect();
    console.log("Connection success!");
} catch (error) {
    throw error
}