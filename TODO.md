> !NOTE
> These are just some ideas, but they are not fixed. Feel free to recommend your own ideas, and if you want to implement them also, it would be great!

### To DO:

- Resources menu with categories

  - Add menu resources
  - Add routing /resources
  - In data.js add resources list
    - Add couple of resources with: category, subcategory, title, url
  - Create ResourceList component: this is only for category and subcategories
    - Filter by search context
  - Create ResourceDetails component: when a subcategory is selected will display a list of titles and urls.

- Search link resources for: (Just some ideas, but let your mind fly)

  - Languages in general
    - Official doc
    - Playgrounds
    - Examples
  - Frontend
    - Free templates
    - Color palettes
    - Gradients
    - Icons
    - Public APIs to practice
    - Free platforms to deploy your frontend
    - Books
    - what else?
  - Backend
    - Free hosting services
    - Free DB services
    - Books
    - what else?
  - DevOps
    - CI/CD platforms
    - Templates for terraform
    - Useful GH actions
    - what else?
  - Testing
    - ...

- Landing page with global filter: paths, courses, classes, resources, etc

  - Add index component in pages (search / landing) (similar to search engines i.e. google)
  - Add huge search bar (search engine style)
  - Filter any path, course, class, resource that match with the search value
  - Render different sections for the above concepts
  - If any concept is clicked it will redirect to the proper place

- Add the quiz to test the knowledge section and add the link to my quiz youtube shorts

- Create index page to explain what is Software Development and add links that will redirect to the different Paths, Courses, etc
- Create Path component and route, it will render an explaination and at the end the courses in order to take
- Fix multilanguage URLs: When it's refreshed is OK, but if you're in an english URL and the language is changed it errors because the slugs are in english but the language is in spanish
- Fix the meta:og image and description to be dynamic. Right now is getting always the same image and description. The idea is that if a class or course is shared, the url preview display the class / course thumbnail and kind of description
