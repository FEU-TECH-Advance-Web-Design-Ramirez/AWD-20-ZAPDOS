# DIY Home Improver App - Project Plan

---

## 1. Persona

**Name:** DIY Home Improver  
**Age:** 34 years old  
**Background:**  
* A homeowner passionate about home improvement and DIY projects.  
* Enjoys hands-on projects and exploring new ideas to transform living spaces.

**Key Characteristics:**  
* Practical and creative  
* Loves detailed, step-by-step guides  
* Seeks community support and inspiration  
* Values quality, reviewed content before starting a project  

---

## 2. UX Flow

1. **User Authentication:**  
   - **Login/Registration:** Secure sign-in via Firebase Authentication.
   - **Welcome/Tutorial:** Quick onboarding to highlight app features.

2. **Home Screen:**  
   - **Featured Projects:** Showcasing approved DIY projects.
   - **Navigation Menu:** Quick links to Submit a Project, Forum, and Tool Recommendations.

3. **Project Interaction:**  
   - **Project Detail:** Step-by-step guides with images, materials, reviews, and ratings.
   - **Submit Review:** Users can add personal reviews and rate projects after completion.
   - **Project Submission:** A guided form to submit new DIY projects, including image upload.

4. **Community Engagement:**  
   - **Forum:** Browse and participate in discussion threads.
   - **Real-Time Chat/Notifications:** For immediate feedback and discussions.

5. **Admin Workflow:**  
   - **Admin Dashboard:** Review and approve new project submissions and user reviews.
   - **Notification System:** Alert admins when new content is pending.

---

## 3. Layout and Navigation

* **Navigation Drawer / Bottom Navigation Bar:**  
  + **Home:** Featured DIY projects and recent activity.
  + **Submit Project:** Form for adding new DIY projects.
  + **Forum:** Access to community discussions.
  + **Profile:** User account settings and project contributions.

* **Screen Layouts:**  
  + **Home Screen:** Card-based layout with project previews, images, and brief descriptions.
  + **Project Detail Screen:** Scrollable view with images, text, and interactive review submission.
  + **Submission Screen:** Form layout with input fields, image uploader, and submit button.
  + **Forum Screen:** List of threads with new post button and sorting/filter options.

* **Consistent Navigation:**  
  + Clear back navigation and intuitive UI components for ease of use.

---

## 4. Color Scheme and Visual Style

* **Primary Colors:**  
  + **Rust:** Conveys warmth and creativity.
  + **Olive Green:** Symbolizes growth and natural inspiration.

* **Accent Colors:**  
  + **Beige:** Provides a neutral, clean background.
  + Additional neutral tones for text and subtle UI elements.

* **Visual Style:**  
  + **Practical and Inspiring:** Clean layout with plenty of white space, large images, and intuitive typography.
  + **Consistent Iconography:** Simple and clear icons that match the DIY and creative vibe.
  + **User-Friendly:** Emphasis on clarity and simplicity in design to ensure a smooth user experience.

---

## 5. Entity Relational Database (ERD)

**Key Entities:**

1. **users**
   - `user_id` (Primary Key)
   - `name`
   - `email` (Unique)
   - `password`
   - `createdAt`

2. **activities**
   - `id` (Primary Key)
   - `title` (Foreign Key - User)
   - `description`
   - `location`
   - `date` (Date)
   - `organizedId` (Foreign Key-User)
   - `validated` (Boolean)
   - `createdAt`(Date)

3. **Applications**
   - `id` (Primary Key)
   - `userId` (Foreign Key - User)
   - `activityId` (Numeric)
   - `status` 
   - `user` Get user
   -    `id`
   -    `name`
   -    `email`

5. **Admin Validation**
   - `adminId` (Primary Key)
   - `message`
   - `activity`
   -    `id`
   -    `validated`
---

## 6. Dataflow

1. **User Authentication & Registration:**
   - **Firebase Authentication** is used to create new users or sign in existing ones.
   - **Dataflow:**  
     User credentials → Firebase Auth → Email domain checked → Redirect to appropriate dashboard (`/admin`, `/org`, `/user`) → Store user data in Firestore.

2. **Admin Login & Dashboard Access:**
   - **User Action:** Login with `@admin.com` email.
   - **Dataflow:**  
     
     - Firebase Auth verifies user → Redirect to Admin Index  
     - Login data stored in Firestore under `Admins` collection  
     - Firestore retrieves:  
       - `Applications` collection → Display application list  
       - `Events` collection → Display all events  
       - `Volunteers` collection → Display all volunteers

3. **Organization Login & Dashboard Access:**
   - **User Action:** Login with `@org.com` email.
   - **Dataflow:**  
     
     - Firebase Auth verifies user → Redirect to Organization Index  
     - Login data stored in Firestore under `Organizations` collection  
     - Firestore retrieves:  
       - `Events` collection → Events created by organization  
       - `Volunteers` collection → Volunteers participating in org events

4. **User Login & Dashboard Access:**
   - **User Action:** Login with `@user.com` email.
   - **Dataflow:**  
     
     - Firebase Auth verifies user → Redirect to User Index  
     - Login data stored in Firestore under `Users` collection  
     - Firestore retrieves:  
       - `Events` collection → Display available/joined events  
       - `Volunteers` collection → Show user’s volunteer activity  
       - `Settings` section → Load user profile and preferences

5. **Role-Based Routing & Session Management:**
   - **Dataflow:**  
     
     - Firebase Auth login → Extract email domain → Determine user role  
     - Redirect to: `/admin/index`, `/org/index`, or `/user/index`  
     - Session token maintained for authenticated access
