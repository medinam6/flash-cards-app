
# flash-cards-app

A web-based application that provides users with a platform to manage flash cards and study them. The application is created using React, JavaScript, NodeJS, Express, and MongoDB. This application includes RESTful APIs which allow the user to submit, edit, or delete cards.

## API endpoints:

### List cards

Endpoint: '/api/cards' 
Method: GET 
Description: Retrieves the list of cards.

Response Format:
```
[
	{
		"_id": "1stidnumber",
		"question": "first question",
		"answer": "first answer ",
		"mastered": false
	},
	{
		"_id": "2ndidnumber",
		"question": "second question",
		"answer": "second answer ",
		"mastered": false
	}
]
```

Note: The "mastered" field will be used after the implementation of study buttons that will allow for multiple card lists with multiple endpoints.

### Add card

Endpoint: '/api/add-card' 
Method: POST 
Description: Adds a new card to the list. 

Request Format:
```
{
	"question": "new question",
	"answer": "new answer",
	"mastered": false
}
```


Response Format:
```
{
	"_id": "3rdidnumber",
	"question": "new question",
	"answer": "new answer",
	"mastered": false
}
```

![flash-card-app-add (2)](https://user-images.githubusercontent.com/52260481/232910761-9884c96c-8f59-4818-81d6-94c4215939f4.gif)


### Update card

Endpoint: '/api/edit-card' 
Method: PUT 
Description: Updates the details of a specific card. 

Request Format:
```
{	
	"_id": "3rdidnumber",
	"question": "updated question",
	"answer": "updated answer",
	"mastered": false
}
``` 

Response Format:
```
{
	"_id": "3rdidnumber",
	"question": "updated question",
	"answer": "updated answer",
	"mastered": false
}
```

### Delete card

Endpoint: '/api/delete-card' 
Method: DELETE 
Description: Deletes a specific card.

Request Format:
```
{	
	"_id": "3rdidnumber",
	"question": "updated question",
	"answer": "updated answer",
	"mastered": false
}
``` 

Response Format:
```
{
	"_id": "3rdidnumber",
	"message": "Card deleted successfully"
}
```

![flash-card-app-edit-delete](https://user-images.githubusercontent.com/52260481/232908825-e66d2321-8ad2-4fa5-9d5e-beaf0f2cb7a7.gif)


# Study page
![flash-card-app-study](https://user-images.githubusercontent.com/52260481/232908065-0df96373-b48d-4fd0-a720-48769dc0d5b9.gif)

Study page allows users to study through card list and flip them, as real flashcards.
