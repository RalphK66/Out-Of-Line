DROP TABLE IF EXISTS queue;
DROP TABLE IF EXISTS temp_users;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS stores;

CREATE TABLE stores(
    id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL UNIQUE,
    latitude DECIMAL(9, 6) NOT NULL,
    longitude DECIMAL(9, 6) NOT NULL,
    count INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE users (
    id int(12) PRIMARY KEY AUTO_INCREMENT NOT NULL,
    email VARCHAR(75) NOT NULL UNIQUE,
    phone_number VARCHAR(75) NOT NULL,
    username VARCHAR(75) NOT NULL UNIQUE,
    password_salt VARCHAR(128) DEFAULT NULL,
    password_hash VARCHAR(256) DEFAULT NULL,
    is_employee BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE temp_users (
    id integer PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    phone_number VARCHAR(255),
    email VARCHAR(255)
);

CREATE TABLE queue(
    id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
    store_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL UNIQUE,
--    temp_user_id INTEGER,
    FOREIGN KEY (store_id) REFERENCES stores(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
--    FOREIGN KEY (temp_user_id) REFERENCES temp_users(id) ON DELETE CASCADE
);

DROP FUNCTION IF EXISTS get_people_enqueued;
DELIMITER //
CREATE FUNCTION get_people_enqueued(store_id INT)
RETURNS INT
READS SQL DATA
BEGIN
    RETURN (
        SELECT COUNT(*)
        FROM queue
        WHERE queue.store_id = store_id
    );
END //
DELIMITER ;

DROP FUNCTION IF EXISTS get_queue_number;
DELIMITER //
CREATE FUNCTION get_queue_number(user_id INT)
RETURNS INT
READS SQL DATA
BEGIN
    RETURN (
        SELECT queue_number
        FROM current_queue
        WHERE current_queue.user_id = user_id
    );
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS get_current_queue;
DELIMITER //
CREATE PROCEDURE get_current_queue(IN user_id INT)
BEGIN
    SELECT ROW_NUMBER() OVER (ORDER BY id) AS queue_number, t.user_id
    FROM (SELECT *
        FROM queue
        WHERE store_id = (
            SELECT store_id
            FROM queue
            WHERE queue.user_id = user_id
        )
    ) AS t;
END//
DELIMITER ;

DROP PROCEDURE IF EXISTS update_people_count;
DELIMITER //
CREATE PROCEDURE update_people_count(IN store_id INT)
BEGIN
    UPDATE stores
    SET count = get_people_enqueued(store_id)
    WHERE stores.id = store_id;
END//
DELIMITER ;

DROP TRIGGER IF EXISTS after_enqueue;
CREATE TRIGGER after_enqueue
    AFTER INSERT ON queue
    FOR EACH ROW
    CALL update_people_count(NEW.store_id);
