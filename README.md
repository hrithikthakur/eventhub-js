# EventHub

## Overview

This project is a React-based landing page designed to showcase events and partner universities. It utilizes `react-bootstrap` for UI components and custom CSS modules for styling.

## Prerequisites

- Node.js (version 14.x or higher recommended)
- npm (version 6.x or higher)

## Installation

1. **Clone the repository:**

```bash
git clone <repository-url>
cd <repository-directory>
```

2. **Install dependencies:**

```bash
npm install
```

## Running the Project

To run the project in development mode, use the following command:

```bash
npm start
```

This will start a development server and open the landing page in your default web browser. Any changes made to the source files will automatically reload the page.

## Project Structure

```
/src
  ├── /assets          # Images and other static assets
  ├── /components      # Reusable UI components
  ├── /pages           # Page components
  ├── /styles          # CSS module files
  ├── App.js           # Main application component
  ├── index.js         # Entry point for React
  └── ...
```

### Key Files

- `LandingPage.module.css`: CSS module containing styles specific to the `LandingPage` component.
- `LandingPage.js`: Main landing page component containing JSX structure and React Bootstrap components.

## Dependencies

- **React**: JavaScript library for building user interfaces.
- **react-bootstrap**: Bootstrap components built with React.
- **bootstrap**: CSS framework for responsive design.

## Custom Styles

Custom styles are applied using CSS modules, which allow for scoped and modular CSS. The styles are imported and used in the components as shown below:

```js
import styles from './LandingPage.module.css';

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      {/* component JSX */}
    </div>
  );
};
```

## Components

### LandingPage

The main component of the landing page. It includes:

- **Header**: Navigation links to features, community, and pricing.
- **Hero Section**: A prominent message "Made for those who do".
- **Event Search**: Dropdowns for selecting event type, location, and date/time.
- **Upcoming Events**: List of upcoming events with filters for weekdays, event type, and category.
- **Partnered Universities**: Display of partnered universities with their ratings and locations.
- **Footer**: Subscription input and additional navigation links.

### UI Elements

- **DropdownButton**: Used for event search filters and category selections.
- **Button**: Used for actions like searching and creating events.
- **Images**: Various images for events, universities, and icons.

## Customization

To customize the landing page, modify the corresponding components and CSS modules. For example, to change the styles of the header, edit `LandingPage.module.css` and update the `.header` class.

## Deployment

To deploy the project, build the application using the following command:

```bash
npm run build
```

This will create a `build` directory with the production-ready files. You can then deploy these files to any static site hosting service.

## Contributing

To contribute to this project:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

