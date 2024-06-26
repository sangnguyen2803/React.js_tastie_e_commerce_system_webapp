const orderListData = [
  {
    order_id: "#FFD7C",
    customer_name: "Jacqueline L.",
    items: [
      {
        item_name: "Bacon CheeseBurger",
        item_additional_options: [
          {
            option_name: "Choose your drink favor",
            selected_option: "Lemonade",
            option_price: "$ 0.0",
          },
          {
            option_name: "Choose your drink size",
            selected_option: "Medium",
            option_price: "$ 1.00",
          },
          {
            option_name: "Seasoned Beef",
            selected_option: "Extra Seasoned Beef",
            option_price: "$ 0.72",
          },
          {
            option_name: "Cheese",
            selected_option: "Extra Cheese",
            option_price: "$ 0.60",
          },

          {
            option_name: "Seasoned Beef",
            selected_option: "Extra Seasoned Beef",
            option_price: "$ 0.72",
          },
          {
            option_name: "Seasoned Beef",
            selected_option: "Extra Seasoned Beef",
            option_price: "$ 0.72",
          },
        ],
        item_price: "$ 13.50",
        quantity: 1,
        note: "No onion",
        subtotal: "$ 14.50",
      },
      {
        item_name: "Green Smoothie",
        item_additional_options: [
          {
            option_name: "Choose your drink size",
            selected_option: "Medium",
            option_price: "$ 1.00",
          },
        ],
        item_price: "$ 8.00",
        quantity: 1,
        note: "Add strawberries",
        subtotal: "$ 9.00",
      },
    ],
    order_subtotal: "$ 23.50",
    delivery_fee: "$ 2.50",
    promotion_code: "FREEDELIVERY",
    promotion_value: "$ 2.00",
    total_price: "$ 28.00",
    total_quantity: 2,
    time_submitted: "2021-12-22 16:30:24",
    order_status: "Pending",
    payment_method: "In cash",
    courier_name: "Robin Antoine",
    cusomter_rating: 5,
  },
  {
    order_id: "#EEG4A",
    customer_name: "Maggie G.",
    items: [
      {
        item_name: "Cheesy Gordita Crunch",
        item_additional_options: [
          {
            option_name: "Seasoned Beef",
            selected_option: "Extra Seasoned Beef",
            option_price: "$ 0.72",
          },
          {
            option_name: "Cheese",
            selected_option: "Extra Cheese",
            option_price: "$ 0.60",
          },
          {
            option_name: "Seasoned Beef",
            selected_option: "Extra Seasoned Beef",
            option_price: "$ 0.72",
          },
          {
            option_name: "Seasoned Beef",
            selected_option: "Extra Seasoned Beef",
            option_price: "$ 0.72",
          },
          {
            option_name: "Seasoned Beef",
            selected_option: "Extra Seasoned Beef",
            option_price: "$ 0.72",
          },
          {
            option_name: "Seasoned Beef",
            selected_option: "Extra Seasoned Beef",
            option_price: "$ 0.72",
          },
          {
            option_name: "Seasoned Beef",
            selected_option: "Extra Seasoned Beef",
            option_price: "$ 0.72",
          },
        ],
        item_price: "$ 5.39",
        quantity: 1,
        note: "",
        subtotal: "$ 6.71",
      },
    ],
    order_subtotal: "$ 6.71",
    delivery_fee: "$ 2.29",
    promotion_code: "",
    promotion_value: "$ 0.00",
    total_price: "$ 9.00",
    total_quantity: 1,
    time_submitted: "2021-12-21 16:16:04",
    order_status: "In progress",
    payment_method: "In cash",
    courier_name: "James Smith",
    cusomter_rating: 4.5,
  },
  {
    order_id: "#E2651",
    customer_name: "Emma W.",
    items: [
      {
        item_name: "Salmon Toast (D)",
        item_additional_options: [
          {
            option_name: "Modifications",
            selected_option: "No Dill",
            option_price: "$ 0.0",
          },
          {
            option_name: "Toast Option",
            selected_option: "Gluten Free Bread",
            option_price: "$ 2.00",
          },
        ],
        item_price: "$ 10.45",
        quantity: 1,
        note: "",
        subtotal: "$ 12.65",
      },
      {
        item_name: "Cappuccino",
        item_additional_options: [
          {
            option_name: "Choose Milk",
            selected_option: "Skim Milk",
            option_price: "$ 0.00",
          },
          {
            option_name: "Temperature",
            selected_option: "Extra Hot",
            option_price: "$ 0.00",
          },
        ],
        item_price: "$ 5.00",
        quantity: 2,
        note: "Hot please",
        subtotal: "$ 10.00",
      },
    ],
    order_subtotal: "$ 22.65",
    delivery_fee: "$ 4.00",
    promotion_code: "",
    promotion_value: "$ 0.00",
    total_price: "$ 26.65",
    total_quantity: 3,
    time_submitted: "2021-12-22 16:06:11",
    order_status: "Picked-up",
    payment_method: "In cash",
    courier_name: "Brian Garcia",
    cusomter_rating: 4.5,
  },

  {
    order_id: "#A2C21",
    customer_name: "Cheryl P.",
    items: [
      {
        item_name: "Draught Peppermint Mocha",
        item_additional_options: [
          {
            option_name: "Draught Peppermint Mocha",
            selected_option: "Medium Draught Peppermint Mocha (16oz)",
            option_price: "$ 0.0",
          },
          {
            option_name: "Add Ice",
            selected_option: "Yes",
            option_price: "$ 0.00",
          },
        ],
        item_price: "$ 6.05",
        quantity: 2,
        note: "",
        subtotal: "$ 12.10",
      },
      {
        item_name: "Chocolate Chip Sea Salt Cookie",
        item_additional_options: [],
        item_price: "$ 5.50",
        quantity: 2,
        note: "",
        subtotal: "$ 11.00",
      },
    ],
    order_subtotal: "$ 23.10",
    delivery_fee: "$ 4.00",
    promotion_code: "",
    promotion_value: "$ 0.00",
    total_price: "$ 27.10",
    total_quantity: 4,
    time_submitted: "2021-12-22 15:56:27",
    order_status: "Canceled",
    payment_method: "In cash",
    courier_name: "Brian Garcia",
    cusomter_rating: 4.5,
  },

  {
    order_id: "#7D885",
    customer_name: "Jessica A.",
    items: [
      {
        item_name: "Berry Brekkie Smoothie (GF, N)",
        item_additional_options: [
          {
            option_name: "Add Ons / Modifications",
            selected_option: "Add Protein Powder",
            option_price: "$ 2.75",
          },
        ],
        item_price: "$ 10.45",
        quantity: 1,
        note: "",
        subtotal: "$ 13.20",
      },
      {
        item_name: "Protein PB & Blueberry Smoothie",
        item_additional_options: [],
        item_price: "$ 10.00",
        quantity: 3,
        note: "",
        subtotal: "$ 30.00",
      },
    ],
    order_subtotal: "$ 43.20",
    delivery_fee: "$ 0.00",
    promotion_code: "NOEL2022",
    promotion_value: "$ 10.00",
    total_price: "$ 33.20",
    total_quantity: 4,
    time_submitted: "2021-12-22 15:50:34",
    order_status: "Completed",
    payment_method: "Credit card",
    courier_name: "Brian Garcia",
    cusomter_rating: 4.8,
  },

  {
    order_id: "#7E1BC",
    customer_name: "Jennifer A.",
    items: [
      {
        item_name: "Pura Vida Acai Bowl",
        item_additional_options: [
          {
            option_name: "Remove Toppings",
            selected_option: "Add Protein Powder",
            option_price: "$ 0.00",
          },
          {
            option_name: "Add Fruit",
            selected_option: "ADD Blueberries",
            option_price: "$ 1.25",
          },
        ],
        item_price: "$ 14.95",
        quantity: 1,
        note: "",
        subtotal: "$ 16.20",
      },
      {
        item_name: "New Orleans Mocha Mint Cold Brew",
        item_additional_options: [
          {
            option_name: "Choice of Size",
            selected_option: "20 Oz",
            option_price: "$ 1.00",
          },
          {
            option_name: "Milk",
            selected_option: "Almond Milk",
            option_price: "$ 0.00",
          },
          {
            option_name: "Sweeteners",
            selected_option: "Agave",
            option_price: "$ 0.00",
          },
        ],
        item_price: "$ 7.00",
        quantity: 2,
        note: "",
        subtotal: "$ 16.00",
      },
    ],
    order_subtotal: "$ 40.00",
    delivery_fee: "$ 1.99",
    promotion_code: "NOEL2022",
    promotion_value: "$ 8.00",
    total_price: "$ 33.99",
    total_quantity: 6,
    time_submitted: "2021-12-22 15:44:03",
    order_status: "Completed",
    payment_method: "Credit card",
    courier_name: "Brian Garcia",
    cusomter_rating: 4.4,
  },

  {
    order_id: "#89CD1",
    customer_name: "Justin B.",
    items: [
      {
        item_name: "Pepper & Egg",
        item_additional_options: [
          {
            option_name: "Choose Egg Style",
            selected_option: "Sub Egg Whites (Scrambled)",
            option_price: "$ 0.00",
          },
          {
            option_name: "Choose Bread",
            selected_option: "Gluten Free Bread",
            option_price: "$ 1.00",
          },
          {
            option_name: "Add Sides",
            selected_option: "Add Side of Turkey Sausage",
            option_price: "$ 4.00",
          },
        ],
        item_price: "$ 8.60",
        quantity: 1,
        note: "",
        subtotal: "$ 13.60",
      },
    ],
    order_subtotal: "$ 13.60",
    delivery_fee: "$ 3.00",
    promotion_code: "NOEL2022",
    promotion_value: "$ 3.00",
    total_price: "$ 13.60",
    total_quantity: 1,
    time_submitted: "2021-12-22 15:41:54",
    order_status: "Completed",
    payment_method: "Credit card",
    courier_name: "Brian Garcia",
    cusomter_rating: 4.9,
  },

  {
    order_id: "#J4881",
    customer_name: "Hailey B.",
    items: [
      {
        item_name: "Mom's Migas Taco",
        item_additional_options: [
          {
            option_name: "Salsa",
            selected_option: "Red Salsa",
            option_price: "$ 0.00",
          },
        ],
        item_price: "$ 5.00",
        quantity: 1,
        note: "",
        subtotal: "$ 5.00",
      },
      {
        item_name: "Iced Chai",
        item_additional_options: [
          {
            option_name: "Variations",
            selected_option: "Small",
            option_price: "$ 0.00",
          },
          {
            option_name: "Milk",
            selected_option: "Half and Half",
            option_price: "$ 0.00",
          },
          {
            option_name: "Ice",
            selected_option: "Light Ice",
            option_price: "$ 0.00",
          },
        ],
        item_price: "$ 4.00",
        quantity: 1,
        note: "",
        subtotal: "$ 4.00",
      },
    ],
    order_subtotal: "$ 9.00",
    delivery_fee: "$ 3.00",
    promotion_code: "NOEL2022",
    promotion_value: "$ 3.00",
    total_price: "$ 9.00",
    total_quantity: 2,
    time_submitted: "2021-12-22 15:36:44",
    order_status: "Completed",
    payment_method: "Debit card",
    courier_name: "Liam Stone",
    cusomter_rating: 4.3,
  },

  {
    order_id: "#K12S6",
    customer_name: "Jimmy K.",
    items: [
      {
        item_name: "Halal Chicken Gyro Sandwich",
        item_additional_options: [
          {
            option_name: "Choice of Add ons",
            selected_option: "Tzatziki Sauce",
            option_price: "$ 0.99",
          },
        ],
        item_price: "$ 15.00",
        quantity: 1,
        note: "",
        subtotal: "$ 15.99",
      },
      {
        item_name: "Hot Coffee",
        item_additional_options: [],
        item_price: "$ 2.99",
        quantity: 1,
        note: "Less sugar",
        subtotal: "$ 3.00",
      },
    ],
    order_subtotal: "$ 18.99",
    delivery_fee: "$ 3.00",
    promotion_code: "NOEL2022",
    promotion_value: "$ 3.00",
    total_price: "$ 18.99",
    total_quantity: 2,
    time_submitted: "2021-12-22 15:30:44",
    order_status: "Canceled",
    payment_method: "Debit card",
    courier_name: "Liam Stone",
    cusomter_rating: 4.3,
  },

  {
    order_id: "#M16S1",
    customer_name: "Anita K.",
    items: [
      {
        item_name: "Halal Chicken Platter",
        item_additional_options: [
          {
            option_name: "Choice of Add ons",
            selected_option: "Baklava",
            option_price: "$ 6.99",
          },
        ],
        item_price: "$ 20.00",
        quantity: 1,
        note: "",
        subtotal: "$ 26.99",
      },
      {
        item_name: "Hot Coffee",
        item_additional_options: [],
        item_price: "$ 2.99",
        quantity: 1,
        note: "Less sugar",
        subtotal: "$ 3.00",
      },
    ],
    order_subtotal: "$ 29.99",
    delivery_fee: "$ 0.00",
    promotion_code: "NOEL2022",
    promotion_value: "$ 3.00",
    total_price: "$ 26.99",
    total_quantity: 2,
    time_submitted: "2021-12-22 15:24:44",
    order_status: "Completed",
    payment_method: "Cash",
    courier_name: "Liam Stone",
    cusomter_rating: 4.7,
  },

  {
    order_id: "#K21K6",
    customer_name: "Ryan W.",
    items: [
      {
        item_name: "Spicy Kale Caesar Salad",
        item_additional_options: [
          {
            option_name: "Spicy Kale Add",
            selected_option: "Add Egg",
            option_price: "$ 2.00",
          },
        ],
        item_price: "$ 17.00",
        quantity: 1,
        note: "",
        subtotal: "$ 19.00",
      },
      {
        item_name: "Ice Tea - Hibiscus",
        item_additional_options: [],
        item_price: "$ 5.00",
        quantity: 1,
        note: "Less sugar",
        subtotal: "$ 5.00",
      },
    ],
    order_subtotal: "$ 24.00",
    delivery_fee: "$ 0.99",
    promotion_code: "NOEL2022",
    promotion_value: "$ 3.00",
    total_price: "$ 21.99",
    total_quantity: 2,
    time_submitted: "2021-12-22 15:22:31",
    order_status: "Completed",
    payment_method: "Cash",
    courier_name: "Liam Stone",
    cusomter_rating: 4.7,
  },

  {
    order_id: "#C45C8",
    customer_name: "Camila C.",
    items: [
      {
        item_name: "Panko Chicken Tenders",
        item_additional_options: [],
        item_price: "$ 14.00",
        quantity: 1,
        note: "",
        subtotal: "$ 14.00",
      },
      {
        item_name: "Herbal Tea",
        item_additional_options: [],
        item_price: "$ 3.00",
        quantity: 1,
        note: "Less sugar",
        subtotal: "$ 3.00",
      },
    ],
    order_subtotal: "$ 17.00",
    delivery_fee: "$ 1.99",
    promotion_code: "NOEL2022",
    promotion_value: "$ 3.00",
    total_price: "$ 15.99",
    total_quantity: 2,
    time_submitted: "2021-12-22 15:17:26",
    order_status: "Completed",
    payment_method: "Cash",
    courier_name: "Liam Stone",
    cusomter_rating: 4.7,
  },

  {
    order_id: "#S24D9",
    customer_name: "Shawn M.",
    items: [
      {
        item_name: "Mozzarella Sticks",
        item_additional_options: [
          {
            option_name: "Choose your sauce",
            selected_option: "Marinara SauceTartar Sauce",
            option_price: "$ 0.00",
          },
          {
            option_name: "Choose your add-ons",
            selected_option: "French Fries",
            option_price: "$ 2.00",
          },
        ],
        item_price: "$ 13.20",
        quantity: 1,
        note: "",
        subtotal: "$ 15.25",
      },
      {
        item_name: "Grapefruit Juice",
        item_additional_options: [
          {
            option_name: "Choose your size",
            selected_option: "Large",
            option_price: "$ 1.00",
          },
        ],
        item_price: "$ 5.00",
        quantity: 1,
        note: "Less sugar",
        subtotal: "$ 6.00",
      },
    ],
    order_subtotal: "$ 21.25",
    delivery_fee: "$ 2.50",
    promotion_code: "NOEL2022",
    promotion_value: "$ 3.00",
    total_price: "$ 20.50",
    total_quantity: 2,
    time_submitted: "2021-12-22 15:18:31",
    order_status: "Canceled",
    payment_method: "Cash",
    courier_name: "Liam Stone",
    cusomter_rating: 4.7,
  },

  {
    order_id: "#M26D1",
    customer_name: "Michelle M.",
    items: [
      {
        item_name: "Turkey BELT Wrap",
        item_additional_options: [
          {
            option_name: "Choice of Wrap",
            selected_option: "Sun Dried Tomato Wrap",
            option_price: "$ 0.00",
          },
          {
            option_name: "Choice of Protein",
            selected_option: "Ham",
            option_price: "$ 2.39",
          },
        ],
        item_price: "$ 7.99",
        quantity: 1,
        note: "",
        subtotal: "$ 10.38",
      },
      {
        item_name: "Fresh Orange Juice",
        item_additional_options: [
          {
            option_name: "Choose your size",
            selected_option: "Large",
            option_price: "$ 1.00",
          },
        ],
        item_price: "$ 5.00",
        quantity: 1,
        note: "Less sugar",
        subtotal: "$ 6.00",
      },
    ],
    order_subtotal: "$ 16.38",
    delivery_fee: "$ 2.00",
    promotion_code: "NOEL2022",
    promotion_value: "$ 3.00",
    total_price: "$ 15.28",
    total_quantity: 2,
    time_submitted: "2021-12-22 15:13:19",
    order_status: "Completed",
    payment_method: "Cash",
    courier_name: "Liam Stone",
    cusomter_rating: 4.7,
  },

  {
    order_id: "#JB103",
    customer_name: "Arthur P.",
    items: [
      {
        item_name: "First Cut Pastrami",
        item_additional_options: [
          {
            option_name: "First Cut Pastrami",
            selected_option: "Sliced Bread",
            option_price: "$ 0.00",
          },
          {
            option_name: "Choose your side",
            selected_option: "House Salad",
            option_price: "$ 20.00",
          },
        ],
        item_price: "$ 14.25",
        quantity: 1,
        note: "",
        subtotal: "$ 14.25",
      },
      {
        item_name: "Lipton Tea",
        item_additional_options: [
          {
            option_name: "Choose your size",
            selected_option: "Large",
            option_price: "$ 1.00",
          },
        ],
        item_price: "$ 2.00",
        quantity: 1,
        note: "Less sugar",
        subtotal: "$ 3.00",
      },
    ],
    order_subtotal: "$ 17.25",
    delivery_fee: "$ 2.50",
    promotion_code: "NOEL2022",
    promotion_value: "$ 3.00",
    total_price: "$ 16.75",
    total_quantity: 2,
    time_submitted: "2021-12-22 15:12:47",
    order_status: "Completed",
    payment_method: "Cash",
    courier_name: "Liam Stone",
    cusomter_rating: 4.7,
  },
];

export default orderListData;
