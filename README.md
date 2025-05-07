# Lab 5 - Starter
Dorjé Pradhan

## Check Your Understanding
1. I would *not* use only unit tests for the end-to-end “message” feature, because sending a message involves multiple parts (UI input, validation, network request, server handling, rendering). Unit tests could cover small pieces of it (like formatting or serialization functions), but verifying the whole “write -> send -> receive” flow requires more than just a unit test offers.
2. Yes. Enforcing an 80-character limit is a simple. Unit tests are ideal for that: you can pass in strings of length 80 (should pass) and 81 (should fail), and get quick feedback whenever that logic changes.

[expose.html](./expose.html)
