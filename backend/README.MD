## sad life

### user routes
defaultEndpoint: /api/users

USER endpoints
/api/users/auth - POST - login user
/api/users - POST - registers user
/api/users/logout - POST - logouts user
USER protected endpoints
/api/users/profile - GET - gets USER profile 
/api/users/profile - PUT - updates USER profile

BLOG endpoints
/api/blogs - GET - Gets all blogs
/api/blogs/:id - GET -  Gets single Blog
BLOG protected endpoints
/api/blogs/create - POST - Create a new Blog
/api/blogs/update/:id - PUT - Updates current blog
/api/blogs/delete/:id - DELETE - Deletes current blog
/api/blogs/likeBlog/:id - PUT - allows user to like blog
/api/blogs/comment/:id - PUT - allows user to comment under blog
/api/blogs/feature/:id - PUT - Sets Blog to featured