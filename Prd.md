
---

# **Product Requirements Document (PRD): UXR Portfolio Website**

### **1. Overview**

**Product Name:**
UXR Portfolio Website (working title)

**Author:**
[Your Name]

**Last Updated:**
[Date]

**Version:**
v1.0

**Summary:**
This project aims to design and launch a personal website that effectively showcases the user’s experience, skills, and research impact as a User Experience Researcher (UXR). The site should serve as a professional hub for potential employers, recruiters, and collaborators — highlighting past projects, publications, methods expertise, and overall design thinking approach. It should balance research rigor and storytelling clarity.

---

### **2. Goals & Objectives**

| Goal                        | Description                                                                        | Success Metrics                                              |
| --------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| Showcase UXR expertise      | Present research projects, methods, and outcomes in a compelling and organized way | Visitors can understand user’s UXR skillset within 2 minutes |
| Support job applications    | Act as a complement to resumes and LinkedIn during the hiring process              | Recruiters spend >1 min on at least 2 project pages          |
| Demonstrate research impact | Clearly communicate how insights informed product or design decisions              | Include at least 3 detailed case studies with outcomes       |
| Increase discoverability    | Improve personal branding and SEO presence                                         | Site appears in top 3 Google results for “[Your Name] UXR”   |
| Ease of maintenance         | Easy to update with new projects or content                                        | New project upload time < 30 mins                            |

---

### **3. Target Users**

**Primary:**

* Recruiters and hiring managers in UX, research, or product design
* Research leaders evaluating candidates for mid-to-senior roles

**Secondary:**

* Other UXRs, designers, and collaborators interested in research process
* Conference organizers or academic partners

**User Needs:**

* Quickly understand what kinds of projects and methods the candidate has worked on
* Evaluate depth of research rigor and communication ability
* See portfolio samples without NDA violations
* Access contact information or LinkedIn easily

---

### **4. Key Features**

#### **4.1 Homepage**

* Professional photo, name, and tagline (e.g., “UX Researcher focused on enterprise systems and usable security”)
* Short summary of background and research philosophy
* Links to resume, LinkedIn, and email

#### **4.2 Portfolio / Projects Page**

* 3–6 featured case studies with consistent structure:

  * Context (problem, organization, role)
  * Methods used (e.g., interviews, surveys, log analysis)
  * Findings / insights
  * Impact (design decisions, business outcomes)
  * Visuals or diagrams
* Optional “teaser” version for NDA-protected projects

#### **4.3 About Page**

* Brief bio and research philosophy
* Downloadable resume / CV
* Highlights of domain expertise (e.g., enterprise UX, privacy, AI trust, etc.)

#### **4.4 Contact Page**

* Simple contact form (optional)
* Email and LinkedIn link
* Option to book a short “coffee chat” (via Calendly)

#### **4.5 Extras / Optional**

* Blog or “Research Notes” section for thought leadership
* List of publications or talks (auto-linked to Google Scholar or OSF)
* Analytics integration (Google Analytics, Plausible)
* SEO and OpenGraph metadata for sharing links

---

### **5. Content Requirements**

| Content Type  | Description                                      | Owner          |
| ------------- | ------------------------------------------------ | -------------- |
| Case Studies  | 3–6 projects showing end-to-end research process | UXR (you)      |
| Resume / CV   | Updated PDF version                              | UXR            |
| About Section | Short professional bio (150–300 words)           | UXR            |
| Visual Assets | Project images, research artifacts, or photos    | UXR / Designer |
| Branding      | Logo or color palette consistent with resume     | Designer       |

---

### **6. Design Requirements**

* **Tone:** Professional, approachable, and research-driven
* **Style:** Minimalist, accessible, research-first aesthetic
* **Accessibility:** WCAG 2.1 AA compliance
* **Responsive Design:** Optimized for desktop, tablet, and mobile
* **Color Palette:** Neutral base (e.g., white/gray) with one accent color
* **Typography:** Clean sans-serif (e.g., Inter, Lato, Roboto)
* **Navigation:** Persistent top nav with clear sections

---

### **7. Technical Requirements**

| Area           | Requirement                                        |
| -------------- | -------------------------------------------------- |
| Platform       | Static site using Next.js, Hugo, or Webflow        |
| Hosting        | GitHub Pages / Netlify / Vercel                    |
| CMS (optional) | Notion or Markdown-based content management        |
| Analytics      | Google Analytics 4 or Plausible                    |
| SEO            | Structured metadata, sitemap, social preview cards |
| Privacy        | No tracking cookies without consent                |
| Accessibility  | Automated and manual testing for a11y              |

---

### **8. Milestones & Timeline**

| Phase       | Deliverables                         | Owner           | Target Date |
| ----------- | ------------------------------------ | --------------- | ----------- |
| Discovery   | Content inventory, sketch wireframes | UXR             | Week 1      |
| Design      | High-fidelity mockups                | UXR / Designer  | Week 2      |
| Build       | Implement site on chosen platform    | Developer / UXR | Week 3      |
| Testing     | QA for links, layout, accessibility  | UXR             | Week 4      |
| Launch      | Deploy live site + announce          | UXR             | Week 5      |
| Post-launch | Analytics + SEO tuning               | UXR             | Ongoing     |

---

### **9. Risks & Mitigation**

| Risk                                     | Mitigation                                 |
| ---------------------------------------- | ------------------------------------------ |
| NDA restrictions limit project detail    | Create redacted or anonymized case studies |
| Site looks too academic or too corporate | Balance research rigor with storytelling   |
| Recruiters don’t read long text          | Use visuals and 2-minute read summaries    |
| Difficult to maintain                    | Use lightweight CMS or Markdown system     |

---

### **10. Success Metrics**

* Recruiter engagement (measured by session time and clicks)
* Conversion: Recruiters or hiring managers contact via site
* Portfolio included in at least 3 successful applications
* Qualitative feedback: “Your site was very clear and well-organized”

---

