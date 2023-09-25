# XML to Redis Test Assignment

This project provides a simple utility to export data from an XML file to a Redis database. It is designed to parse specific XML structures and store the parsed data into Redis using predefined key structures.

## Project Structure

```
/xml-to-redis/
|-- /src/
|   |-- index.js
|   |-- XmlParser.js
|   |-- RedisClient.js
|-- /tests/
|   |-- XmlParser.test.js
|-- config.xml
|-- docker-compose.yml
|-- Dockerfile
|-- package.json
|-- export.sh
|-- README.md
```

## Prerequisites

- Docker
- Docker Compose
- Node.js (npm or yarn)

## Setup

1. Clone the repository:

```bash
git clone [repository-url] xml-to-redis
cd xml-to-redis
```

2. Install Node.js dependencies:

```bash
npm install
```

or

```bash
yarn
```

## Usage

To run the application, use the provided `export.sh` script with the path to your XML file:

```bash
./export.sh -v ./config.xml
```

If the `-v` argument is present, the script will print all keys saved to Redis.

## Docker Compose

The project uses Docker Compose to run the Node.js application and Redis in separate containers. To start the services:

```bash
docker-compose up -d
```

## Testing

Unit tests are provided for the XML parsing functionality. To run the tests:

```bash
npm test
```

or

```bash
yarn test
```

## License

This project is open-sourced and is licensed under the MIT License.
