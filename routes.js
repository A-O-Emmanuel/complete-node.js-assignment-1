const fs = require('fs');

const routeHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/') {
        res.statusCode = 200;
        res.setHeader('content-type', 'text/html');
        res.write(`<html>
                    <head>
                        <title></title>
                    </head>
                    <body>
                        <h1>Hello!</h1>
                        <form action ="/create-user" method="POST">
                            <input type="text" name="username" />
                            <button type="subm">Send</button>
                        </form>
                    </body>

                </html>`)
        res.end();
    }

    if (url === '/users') {
        res.statusCode = 200;
        res.setHeader('content-type', 'text/html');
        res.write(`<ul><li>Paul</li>
                    <li>James</li>
                    <lie>Peter</lie>
                    </ul>`)
        res.end();
    }

    if (url === '/create-user' && method === 'POST') {
        const bodyData = [];

        req.on('data', (body) => {
            bodyData.push(body)
        })

        return req.on('end', () => {
            const parsedBody = Buffer.concat(bodyData).toString();
            const message = parsedBody.split('=')[1];
            console.log(message);
            res.statusCode = 302;
            res.setHeader('Location', '/users')
            return res.end();
        })

        
    }
}


module.exports = routeHandler;