import React from "react";

const ItemContext = React.createContext();

const ItemProvider = ItemContext.Provider;
const ItemConsumer = ItemContext.Consumer;

export { ItemProvider, ItemConsumer };
