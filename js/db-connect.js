export const mariaDBConn = () => {
    const mariadb = require('mariadb');
    const pool = mariadb.createPool({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'score_board',
    });
    const sql = 'select sco from score_board';

    async function getScoreList() {
        let conn;
        let rows;

        try {
            conn = await pool.getConnection();
            rows = await conn.query(sql);
        }
        catch (e) {
            throw e;
        }
        finally {
            if (conn) {
                await conn.end();
            }
            return rows;
        }
    }
};
