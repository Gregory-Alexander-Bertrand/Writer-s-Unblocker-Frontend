# Writers--Unblocker-Frontend

## Overview
You've undoubtedly heard of writer's block; the bane of the existence of writers the world over. Writers unblocker is meant to give writers the world over an injection of creativity. By the uses of many creative writing prompts, writers, pro and amateur, will be able to stoke the flames of their creativity.

## User Stories
When the user loads the app, a landing page with a number of inspirational writing quotes awaits. Initial, in the un-logged in state, only Home and Login/Signup links will be visible on the navbar. Once logged in, the links on the navbar will change to Prompts, Create Prompts, Create Stories, and Read Stories. The user will be on the Prompts page when they login. In prompts, the user can scroll through a list of prompts. When the find one they like, they can click it, and be taken to the Create Stories page. In Create Prompts they can make prompts of their own, which will then be visible back in the Prompts page. In the Create Stories section, the user will be able to write their story and post it(this will also be like their blog where they can view, edit or delete their story). In Read Stories, the user will be able to read stories submitted by all users and can comment on the stories.

## MVPS
* A Home/landing page with greeting.
* Login/signup forms.
* A page of pre-seeded writing prompts.
* A way for users to create and save their own prompts.
* A place for the users to write and post their stories.
* Users can read whatever story they want.
* Users can edit or delete their stories if they choose.

## Stretch Goals
* Prompts are ordered by popularity(how many stories they generate).
* A way for users to look up prompts by genre.
* A leaders-board component for writers with most stories.

## Routes Table

| Routes      | Path            |Summary                           |
| ------------|----------------------------------------------------|                  
| Post        | /create         | user signup                      |
| Post        | /login          | user login                       |
| Post        | /create/prompt  | user generated prompt            |
| Put         | /create/stories | user generated stories           |
| Post        | /create/comment | user posted comments             |
| Put         | /update/story   | users can edit story.            |
| Get         | /prompts        | will display all prompts.        |
| Delete      | /destroy        | Users can delete stories.        |
| Get         | /allstories     | All stories will be displayed    |

## Technology Implemented
* React
* Python
* Material UI
* CSS

## Timeline
* 21/5/2021: Set up user login/signup including password hash and JWT. Create all pages and links for navbar. Finish all routes for test purposes. Seed a few test prompts.
* 22/5/2021 & 23/5/2021: Switch to frontend, implement forms and other packages from material UI.
* 25/5/2021: Have at least two different stories with comments attached.
* 26/5/2021: MVP is done.
* 27/5/2021: Finish any stretch goals.

## Foreseen Challenges
* Defining Association relationships between tables.
