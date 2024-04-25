-- Naming conventions

-- Renaming a table
RENAME TABLE table_name to new_table_name

-- ALTER table general
ALTER TABLE table_name
ADD column_name datatype,
MODIFY column_name new_datatype;

-- CREATE table general
CREATE TABLE table_name(
    column_name datatype NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (column_name)
);

-- Procedure
DELIMITER $$

CREATE PROCEDURE procedureName(param1 datatype, param2 datatype)
BEGIN
    -- SQL HERE
    DECLARE varName datatype;
    SET varName = value;

    DECLARE exit_handler CONDITON FOR SQLSTATE 'VALUE';
    DECLARE varName2 datatype DEFAULT value;
    DECLARE CONTINUE HANDLER for exit_handler
    BEGIN
        -- error handling here
        ROLLBACK;
        SELECT 'Error report here'
    END;

    IF condition THEN
        -- SQL here
        SET varName2 = value;

    ELSE
        -- else

    END IF;

    WHILE condition DO:
        -- loop here

    END WHILE;

    START TRANSACTION;
        -- transactional SQL
        IF condition THEN
            COMMIT;
        ELSE
            ROLLBACK;
        END IF;
END $$

DELIMITER ;
