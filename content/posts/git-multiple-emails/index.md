---
title: Using a Company Email with Your GitHub Account — A Step-by-Step Guide

date: 2024-03-13
cover: cover.jpg

meta:
  desc: >
    Learn how to link your company email to your GitHub account and configure Git for project-specific emailing. This guide covers adding emails, routing notifications, and setting conditional Git configurations for efficient collaboration and streamlined workflows.
---

<div data-excerpt>

In the digital age, effective collaboration is the backbone of any successful project. Whether you're an in-house team member or an external consultant, integrating your workflow with the company's systems and protocols is not just beneficial—it's essential. Today, I dive into a common yet often overlooked aspect of project collaboration: using a company-specific email with your existing GitHub account. This seemingly small step can significantly streamline communication and project tracking, ensuring that your commits are signed correctly and that notifications reach you through the appropriate channels.

</div>

### Why Use a Company Email with GitHub?

Imagine you're working on a project for a company. To maintain a unified front and ensure seamless collaboration, it's practical to use an email address under the company's domain for all project-related correspondence. It is also logical to sign your commits with the company email.
However, the thought of managing multiple GitHub accounts or juggling between different email addresses might be daunting. Fortunately, GitHub and Git offer a solution that allows you to link a company email to your personal account, eliminating the need for separate accounts and simplifying your workflow.

### Setting the Stage: Add Your Company Email to GitHub

The first step is to add your company email to your GitHub account. This can be done effortlessly by navigating to [GitHub's email settings page](https://github.com/settings/emails). Adding your company email here not only associates it with your account but also allows you to select it as the primary email for specific repositories or organizations.

### Fine-Tuning Notifications: Route Them Wisely

With your company email added, the next step is to ensure that notifications from the company's organization on GitHub are directed to this email. This can be configured in the [custom routing section of the GitHub notifications settings](https://github.com/settings/notifications/custom_routing). With this setting, you won't miss an important update when monitoring your
corporate email. At the same time, you won't be disturbed with notifications in your spare time
and while on vacations.

### Tailoring Git Configurations for Project-Specific Committing

Now, let's tackle a common challenge: ensuring that commits to company projects use your company email, without altering your global Git settings. The solution lies in conditional configuration within Git, which allows you to specify different user information for various projects.

For someone like me, who juggles multiple projects as a consultant, having conditional Git settings is crucial. However, even if you're an in-house developer who has been with the same company for many years, you might still engage in personal side projects or volunteer as a developer for a non-profit. It makes sense to sign off on those projects with your personal email or perhaps even a nickname.

1. **Conditional Includes in `.gitconfig`:** Begin by editing your global `~/.gitconfig` file to include conditional paths for different projects. This looks something like this:

   ```
   [includeIf "gitdir:~/WebDev/Project1/"]
     path = ~/WebDev/Project1/.gitconfig
   [includeIf "gitdir:~/WebDev/Project2/"]
     path = ~/WebDev/Project2/.gitconfig
   ```
   
   This setup tells Git to use a specific configuration file for commits made within the `Project1` or `Project2` directories. Ensure that this conditional include is placed after your global username and email settings.

2. **Creating a Local Config File:** For each project, create a local `.gitconfig` file (e.g., `~/WebDev/Project2/.gitconfig`) and specify the company email as follows:

   ```
   [user]
     email = p.virtanen@company.com
   ```
   
   This setup ensures that any commits made within the project directory will automatically use the specified company email, keeping your contributions aligned with the company's identity.

### All Set!

Using your company email with your GitHub account and configuring Git appropriately simplifies collaboration and ensures your contributions are properly attributed. This method streamlines notifications and keeps your work organized, allowing you to focus on what matters without mixing personal and professional communications. It's a straightforward yet effective way to enhance your project involvement and efficiency.

Cover photo by <a href="https://unsplash.com/@yancymin?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Yancy Min</a> on <a href="https://unsplash.com/photos/a-close-up-of-a-text-description-on-a-computer-screen-842ofHC6MaI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  