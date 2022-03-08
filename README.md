## Run the App

- REACT_APP_ENDPOINT=http://localhost:3004 in .env.local file
- `npm start` && `npm run mock-server`

### Approach to challenge

Given that this was an e-commerce website I knew `pages` would make up the core of the architecture. I categorised the app into the following sections:

- pages: where the different pages exist
- components: where the dummy components exist
- page-shell: defining the structure of a page where the data will be pulled in to

Once I had this in mind - and generated the types - I created a mock server to simulate the real life case of calling an endpoint using `mock-server`.

I then wrote down two basic test cases for success vs failure of the API being called - and so what would be rendered. NOTE: At this point, the tests were only basic.

Once they were passing, I moved on to scaling the tabs & banner text by moving them into separate files to mimic how they may be pulled in using a CMS - I assume it's linked to a CMS!

Now that all the data was being passed down, I went back to my tests and extended them to account for differences in what returned from the API. For example, the discrepancy in `sizes vs size` or no `retail` price

### Things that need a cleaning up (... if I had more time)

- Select input should not be stateful and the state control should exist OUTSIDE of components (accept props)
- standardise colours, padding, margin in to a centralised system. Currently I am setting colours and fonts all over the place.
- refactor the `product` component in to smaller files
- refactor button component (especially how I use border)
- ... been more pixel perfect!
