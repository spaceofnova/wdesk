# Version History

## 0.0.1

- Initial release

## 0.0.2

- Added:
  - Apps context
  - Apps provider
  - Default apps
  - Installable apps
  - Store system app
  - Settings system app
  - Example app to test the store
  - vhist.md file - version history
- Changed:
  - Changed the way apps are installed and uninstalled
  - Changed the way the window component is rendered
- Fixed:
  - Fixed the window component not being able to be dragged
  - Some minor bugs
- Notes:
  - The store system app is still in development and may not work as expected
  - Apps do not save their state between sessions

## 0.2.0

- Added:
  - Date and time
  - Apps can be pinned to the taskbar
  - Store Versioning
  - Some UI styling changes
  - Functional light/dark theme (its not perfect)
  - Blur underwindows is now toggleable
  - Date and time
  - Installed apps are now saved between sessions
  - Applist view
- Changed:
  - Changed the way apps are installed and uninstalled
  - App installed Detection

## 0.2.1

- Added:
  - App Active indicator
- Changed:
  - Changed the way apps are installed and uninstalled
- Bug fixes:
  - Fixed the window component not being able to be dragged
  - Fixed the window component not being able to be resized
  - Some minor bugs

## 0.3.0

- Added:
  - New UI
  - New Panel Component that can be used to make panels for docks, widgets, etc.
  - Overall UI styling changes
  - Added Widgets: Date and Time, Fullscreen Launcher, App Launcher, Window Options menu
  - Notifications! Apps can request to send notifications to the user
    - Notifications are displayed in the top right corner of the screen
    - Notifications can be dismissed by clicking on them or the X button
  - Lock Screen!
  - Faster Boot up times! (1.5x faster!)
- Changed:
  - Changed the way apps are installed and uninstalled
  - A new boot-up process has been added to the app to load stuff