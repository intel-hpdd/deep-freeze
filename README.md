# deep-freeze

Freezes an Object tree recursively. Does not detect cycles, so use this only on JSON like objects, not on a graph.

Also, this is useful for testing to assert your objects are not being mutated. There are not many situations where you
would want this code to create immutable objects in production.
