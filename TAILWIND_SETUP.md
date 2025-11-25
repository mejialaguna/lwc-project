# Tailwind CSS Setup for LWC

## ✅ Installation Complete

Tailwind CSS has been configured in your Salesforce project!

## 📋 How It Works

1. **Tailwind scans** your LWC files for classes
2. **Generates a CSS file** in `force-app/main/default/staticresources/tailwind.css`
3. **Deployed as a Static Resource** to Salesforce
4. **Loaded in components** using `platformResourceLoader`

## 🚀 Usage

### Build Tailwind CSS
```bash
npm run build:tailwind
```

### Watch mode (auto-rebuild on changes)
```bash
npm run watch:tailwind
```

### Deploy to Salesforce
```bash
sfdx force:source:push
# or
sf project deploy start
```

## 💡 Using Tailwind in Your Components

### 1. Import and Load Tailwind
```javascript
import { LightningElement } from 'lwc';
import tailwindCss from '@salesforce/resourceUrl/tailwind';
import { loadStyle } from 'lightning/platformResourceLoader';

export default class YourComponent extends LightningElement {
  connectedCallback() {
    loadStyle(this, tailwindCss);
  }
}
```

### 2. Use Tailwind Classes in HTML
```html
<template>
  <div class="p-6 bg-blue-500 text-white rounded-lg">
    <h1 class="text-2xl font-bold">Hello Tailwind!</h1>
  </div>
</template>
```

## 📝 Example Component

Check out `tailwindExample` component to see Tailwind in action!

## ⚠️ Important Notes

- **Always rebuild** after adding new Tailwind classes: `npm run build:tailwind`
- **Deploy the static resource** to Salesforce after rebuilding
- **Load Tailwind** in each component that uses it (via `loadStyle`)
- Tailwind is scoped to shadow DOM, so styles won't leak

## 🔄 Workflow

1. Write LWC components with Tailwind classes
2. Run `npm run build:tailwind` (or use watch mode)
3. Deploy to Salesforce
4. Test your components

Happy styling! 🎨
