const connection = mySQL.createConnection(
    {
        host: "localhost",
        user: "root", //CHANGE
        password: "root", //CHANGE
        database: "out_of_line"
    }
);

try {
    connection.connect();
    console.log("Connection success!");
} catch (error) {
    throw error
}