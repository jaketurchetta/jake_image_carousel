# Shelter Any Place

Shelter Any Place enables property rental providers to display variouse images for their real estate in an image carousel and modal display.


## Goals

The primary goal of this project was to scale the backend for an API that met the following specifications:

>- 1,500+ requests per second (RPS)
>- Less than 2.0s average latency per request
>- Less than 1.0% error rate during a stress test

## Outcome

The following are the results of the stress test for the version final backend architecture:

>- 1,500+ requests per second (RPS)
>- 0.021s average latency
>- 0.2% error rate

![alt text](/Service/client/dist/StressTestResults.png)

## More Information

- [API Server](Service/server/README.md) - information about the available API queries

## Related Projects

- Similar Properties API: https://github.com/jorgio-castello/Similar-Properties-API
- Booking API: https://github.com/NathanielTorrez/BookTrip
