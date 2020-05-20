## Server API

### Get all images for one property
  * GET `/properties/:propertyid/images`

**Path Parameters:**
  * `propertyid` listing/property id

**Success Status Code:** `200`

**Returns:** JSON array of objects for each property image

```json
    {
      "id": "Number",
      "property_id": "Number",
      "position": "Number",
      "url": "String",
      "description": "String"
    }
```
### Add property
  * POST `/properties`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "id": "Number"
    }
```

### Add property images
  * POST `/properties/:propertyid/images`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "id": "Number",
      "property_id": "Number",
      "position": "Number",
      "url": "String",
      "description": "String"
    }
```

### Update image
  * PATCH `/properties/:propertyid/images/:imageid`

**Path Parameters:**
  * `propertyid` property/listing id
  * `imageid` image id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "position": "Number",
      "url": "String",
      "description": "String"
    }
```

### Delete property image
  * DELETE `/properties/:propertyid/images/:imageid`

**Path Parameters:**
  * `propertyid` property id
  * `pimageid` image id

**Success Status Code:** `204`

### Add image to property
  * POST `/properties/:propertyid/images`

**Path Parameters:**
  * `propertyid` property/listing id

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys

```json
    {
      "id": "Number",
      "property_id": "Number",
      "position": "Number",
      "url": "String",
      "description": "String"
    }
```