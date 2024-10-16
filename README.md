## Body Fat Calculation Library

This library provides a set of functions for calculating body fat percentage using various established algorithms.

### Inputs

The library's functions accept various skinfold measurements (in millimeters) and age (in years) as input. The required inputs vary depending on the specific algorithm being used.  For example, the Parillo algorithm requires chest, abdominal, thigh, suprailiac, lower back, tricep, subscapular, calf, bicep skinfolds and weight (in kg) whereas the Durnin algorithm requires tricep, bicep, subscapular, suprailiac skinfolds, and age.

### Outputs

All functions return a single floating-point number representing the calculated body fat percentage.

### Usage

This library is likely to be used by developers creating fitness or health-related applications. The functions provide a simple and convenient way to incorporate body fat calculations into these applications. The different algorithms offer flexibility depending on the specific needs of the application, allowing developers to choose the most appropriate method for their use case.

For example, a developer creating a mobile app for tracking fitness progress could use this library to allow users to enter their skinfold measurements and calculate their body fat percentage. The app could then store these results over time, allowing users to track their progress and see how their body composition changes.