## Name:
Twitter App

## Description:
Example of custom front-end component fetching data from an external source (Twitter) manageable via VTEX CMS (Site Editor).

## Proof points:
- Front-end customization
- Site Editor integration (CMS)
- External API calls
- GraphQL on VTEX IO
- Admin extension

## How to demo:

1. Clone/Download this repository and open it with a code editor of your choice, eg. VSCode

2. Open the terminal and login to your VTEX account

```
vtex login {{account}}
```

3. Create a new development workspace or use an existing one

```
vtex use {{workspace}}
```

4. Add the account name as the vendor on `manifest.json` file

```
{
  "name": "twitter-app",
  "vendor": "{{account}}",
  "version": "0.0.1",
  "title": "Twitter App",
  "description": "Example of custom front-end component fetching data from an external source (Twitter) manageable via VTEX CMS (Site Editor).",
  "mustUpdateAt": "2018-01-04",
  ...
  ...
}
```

5. Link the project

```
vtex link
```

6. After the linking, open the admin panel and show that we extended it with a brand new section

```
Navigate to:

https://{{workspace}}--{{account}}.myvtex.com/admin/twitter

```

![Twitter App](./images/twitter-app-1.png)

7. Input a valid "Twitter API Token", eg. `Bearer ****************` and save. (You can find a valid one [here](https://docs.google.com/document/d/1rXFcquMX0I5IGXaLs7jxUeTez1utJut1JOCSORaLo40/edit?usp=sharing))

8. Download the [VTEX Store theme](https://github.com/vtex-apps/store-theme) or another store theme of your choice

9. Add the Twitter App as peer dependency on the Store theme `manifest.json` file

![Twitter App](./images/twitter-app-2.png)

10. Add the Twitter App front-end component on the Store theme `homepage.jsonc` file

![Twitter App](./images/twitter-app-3.png)

11. Link the Store theme project

```
vtex link
```

12. Navigate to the Storefront and show the new Twitter component on the homepage

![Twitter App](./images/twitter-app-4.png)

13. Open the Site Editor and show that we can edit the configuration of the Twitter App front-end component

![Twitter App](./images/twitter-app-5.png)

