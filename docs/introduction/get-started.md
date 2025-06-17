# Getting Started

This guide will help you quickly set up and use the Hugo Narrow theme.

## Prerequisites

Before starting, make sure you have the following installed on your system:

- [Git](https://git-scm.com/)
- [Hugo Extended](https://gohugo.io/installation/) (Extended version required, version 0.146 or higher)


## Installation

### Create a New Hugo Site

```bash
hugo new site myblog
cd myblog
git init
```

### Add the Theme

There are two ways to add the theme:

#### Option 1: Using Git Submodules (Recommended)

```bash
git submodule add https://github.com/tom2almighty/hugo-narrow.git themes/hugo-narrow
# Update submodules
git submodule update --init --recursive --remote
```

#### Option 2: Direct Download

Visit the [Hugo Narrow Releases page](https://github.com/tom2almighty/hugo-narrow/releases) to download the latest version and extract it to the `themes/hugo-narrow` directory.


### Configure the Theme

Copy the example configuration files:
```bash
cp -r themes/hugo-narrow/exampleSite/* .
```

Modify the `hugo.yaml` configuration file:
```yaml
theme: hugo-narrow
baseURL: 'https://example.com'  # Change to your website URL
title: 'My Blog'  # Change to your website title
```

### Create Content

Create a new post:
```bash
hugo new posts/my-first-post.md
```

Edit the front matter:
```yaml
---
title: "My First Post"
date: 2025-06-13
draft: false
categories: ["Blog"]
tags: ["Hugo", "Tutorial"]
---
```

### Local Preview

Run the development server:
```bash
hugo server -D
```

You can now visit `http://localhost:1313` in your browser to view your website.

## Online Deployment (Vercel)

Create a `vercel.json` in the site root directory:

```json
{
  "build": {
    "env": {
      "HUGO_VERSION": "0.146.0"
    }
  },
  "buildCommand": "hugo --minify --gc"
}
```


