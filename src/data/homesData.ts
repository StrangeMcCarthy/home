import { HomeModel, RetailerStore, ResourceArticle, CustomerReview } from '../types/home';

export const INITIAL_HOMES: HomeModel[] = [
  {
    "id": "the-basecamp-lodge",
    "name": "The Basecamp Lodge",
    "tagline": "Rustic luxury double-wide with covered porch & open Great Room",
    "sectionType": "Double-Wide",
    "price": 138900,
    "startingEstMonthly": 778,
    "beds": 2,
    "baths": 3,
    "sqft": 1650,
    "dimensions": "28' x 60'",
    "style": "Modern Farmhouse",
    "description": "Designed for outdoor enthusiasts and families alike! The Basecamp Lodge combines timber accents, an expansive open kitchen island, and a luxury primary suite with a deep soaking tub.",
    "highlights": [
      "Chef Kitchen with Walk-in Pantry & Center Island",
      "Spacious Primary Suite with Free-Standing Soaking Tub",
      "Crafted Wood Accent Walls & Built-in Media Unit",
      "Energy Star® Certified High-Efficiency Insulation"
    ],
    "features": [
      "Full Drywall Interior with Designer Soft Warm Paint",
      "Thermal Pane Low-E Argon Windows",
      "Custom Shaker Cabinetry with Soft-Close Hinges",
      "Architectural Shingle Roof with 30-Year Warranty"
    ],
    "specs": [
      {
        "label": "Roof Pitch",
        "value": "4/12 Pitch"
      },
      {
        "label": "Insulation",
        "value": "R-22 Floor / R-11 Wall / R-30 Roof"
      },
      {
        "label": "HVAC",
        "value": "Carrier® Smart Heat Pump System"
      },
      {
        "label": "Water Heater",
        "value": "50-Gallon Quick-Recovery Electric"
      }
    ],
    "images": [
      "https://regentstorage.blob.core.windows.net/regent-public/65e8fabcee854dc0b2ec7583af2ebe4a.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/91d2a5fbe91e4a3ba9e78e098a628ee2.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/ca1d2a25ba3d403f99266b86f32457eb.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/371c251ec8e74656ac1e244165d3142e.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/6c087b8d133c49ef8c6de7d6c316ba1f.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/a223d040dcc2446583a4ea87a819fb7e.png",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": true,
    "isBestSeller": true,
    "isTurnkeyReady": true,
    "customizations": [
      {
        "id": "siding",
        "categoryName": "Exterior Hardie Board Siding",
        "description": "Choose your home’s welcoming curb appeal color palette.",
        "options": [
          {
            "id": "s-cream",
            "name": "Warm Linen Cream",
            "colorOrPattern": "#F5EFE6",
            "priceAdjustment": 0
          },
          {
            "id": "s-sage",
            "name": "Soft Southern Sage",
            "colorOrPattern": "#7B9F7F",
            "priceAdjustment": 650
          },
          {
            "id": "s-charcoal",
            "name": "Modern Farmhouse Charcoal",
            "colorOrPattern": "#4A4E51",
            "priceAdjustment": 850
          }
        ]
      }
    ]
  },
  {
    "id": "the-woodside",
    "name": "The Woodside",
    "tagline": "Grand 4-bedroom modular estate with stacked stone fireplace & dual suites",
    "sectionType": "Modular",
    "price": 189500,
    "startingEstMonthly": 1061,
    "beds": 4,
    "baths": 3,
    "sqft": 2200,
    "dimensions": "32' x 72'",
    "style": "Craftsman Haven",
    "description": "Built to full modular building code standards, The Woodside features 4 spacious bedrooms, a floor-to-ceiling stone fireplace, dual primary suites, and a gourmet kitchen.",
    "highlights": [
      "Dual Primary Suites with Walk-in Closets",
      "Floor-to-Ceiling Stacked Stone Fireplace",
      "Covered Back Patio with Outdoor Grill Hookup",
      "Dedicated Mudroom & Laundry Station"
    ],
    "features": [
      "2x6 Exterior Wall Framing",
      "Pella® Energy-Efficient Windows with Decorative Grids",
      "Luxury Vinyl Plank Flooring Throughout"
    ],
    "specs": [
      {
        "label": "Roof Pitch",
        "value": "6/12 Pitch Gable"
      },
      {
        "label": "Insulation",
        "value": "R-30 Floor / R-19 Wall / R-38 Roof"
      }
    ],
    "images": [
      "https://regentstorage.blob.core.windows.net/regent-public/feed95dfe0194eb9ba2006d1e4e938a1.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/a7dc94b8e7b942df89f196d2a0049882.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/0ae7b30b44624743b0630d9ec2107269.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/5e0f29a86f3241f88e227653eaf55a42.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/6a3641a931f942f8a1f6c1b61ce78aa9.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/649772dc14ed4bf495a47610c8fe47af.png",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": true,
    "isBestSeller": false,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-pip",
    "name": "The Pip",
    "tagline": "Compact, efficient 3-bedroom single-wide with cozy open living",
    "sectionType": "Single-Wide",
    "price": 74900,
    "startingEstMonthly": 419,
    "beds": 3,
    "baths": 2,
    "sqft": 1050,
    "dimensions": "16' x 66'",
    "style": "Rustic Cottage",
    "description": "Smart design maximizing every square foot! The Pip brings 3 full bedrooms and 2 baths into an easy-to-site single section layout with bright living space and energy savings.",
    "highlights": [
      "3 Full Bedrooms with Generous Closets",
      "Open Kitchen & Breakfast Bar",
      "Low Monthly Utility Footprint"
    ],
    "features": [
      "Low-E Double Pane Insulated Vinyl Windows",
      "Full Kitchen Appliance Package Included"
    ],
    "specs": [
      {
        "label": "Roof Pitch",
        "value": "3/12 Pitch"
      },
      {
        "label": "Insulation",
        "value": "R-14 Floor / R-11 Wall / R-22 Roof"
      }
    ],
    "images": [
      "https://regentstorage.blob.core.windows.net/regent-public/59764f40aa324d71ba6b5256703a0fbe.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/27fee480e9c945ca832a50e222cf7676.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/61fce8efda5343878ad3a443cc740956.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/177f0272aad849d282eef06ffdb476f6.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/231e13b6bb0b4cdba040bb686002cb6b.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/ac67bb0cbf5a45fdae71ba3f2aa2871e.png",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": true,
    "isBestSeller": true,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-marsh-ridge",
    "name": "The Marsh Ridge Coastal",
    "tagline": "Airy coastal double-wide with sunlit living room & white oak trim",
    "sectionType": "Double-Wide",
    "price": 124500,
    "startingEstMonthly": 697,
    "beds": 3,
    "baths": 2,
    "sqft": 1650,
    "dimensions": "28' x 60'",
    "style": "Southern Elegance",
    "description": "Feel the coastal breeze! Featuring vaulted ceilings, large picture windows, a spacious island bar, and a tranquil master bath retreat.",
    "highlights": [
      "Cathedral Living Room Ceilings",
      "Secluded Master Suite with Walk-in Closet",
      "Full Island Bar with Seating for Four"
    ],
    "features": [
      "Moisture-Resistant Subflooring System",
      "Designer Matte Black Plumbing Fixtures"
    ],
    "specs": [
      {
        "label": "Roof Pitch",
        "value": "4/12 Pitch"
      },
      {
        "label": "Insulation",
        "value": "R-22 Floor / R-11 Wall / R-30 Roof"
      }
    ],
    "images": [
      "https://regentstorage.blob.core.windows.net/regent-public/a58520de574a49049ded0d136f4dabe6.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/e77401fbdf6645b3a2ae6b27e153516e.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/c3abb327a06645a1a3fb2b56e5e1833b.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/1daa4b1eebdc4bb794669d6318de96a6.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/403f4a120da9471c820fba7b41937c06.jpeg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/ad8c7fec9cbc4d37bab98f2ff7d31bf4.png",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": true,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-sky-harbor-3-0",
    "name": "The Sky Harbor 3.0",
    "tagline": "Luxury 4-bedroom modular estate with bonus family loft area",
    "sectionType": "Modular",
    "price": 224900,
    "startingEstMonthly": 1259,
    "beds": 4,
    "baths": 3,
    "sqft": 2200,
    "dimensions": "32' x 80'",
    "style": "Minimalist Lodge",
    "description": "Our premier modular estate! Features 4 large bedrooms, 3 full baths, an upstairs loft, a grand fireplace, and double ovens.",
    "highlights": [
      "4 Bedrooms + Bonus Family Loft",
      "Grand Stone Fireplace with Cedar Mantle",
      "Double Oven & Commercial Grade Gas Range"
    ],
    "features": [
      "Modular Steel & Wood Chassis",
      "Pella Architectural Windows & French Doors"
    ],
    "specs": [
      {
        "label": "Roof Pitch",
        "value": "7/12 Pitch Heavy Timber Truss"
      },
      {
        "label": "Insulation",
        "value": "R-30 Floor / R-21 Wall / R-38 Roof"
      }
    ],
    "images": [
      "https://regentstorage.blob.core.windows.net/regent-public/4e37e5c5d45842a5b74ba67b06481ba0.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/033ef99c6e534183af27067d29417413.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/d36fa181f0f24da3980461b6bb4fb7d3.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/35ded52b3dcb4b2594fb99a5e5ef11d4.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/17e08b323f614c2cb67e1eabda98c10c.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/e6a7815b08f543808eafab443f5cc70d.png",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": true,
    "isBestSeller": false,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-englewood",
    "name": "The Englewood Farmhouse",
    "tagline": "Charming 3-bedroom single-wide with board-and-batten siding",
    "sectionType": "Single-Wide",
    "price": 84900,
    "startingEstMonthly": 475,
    "beds": 3,
    "baths": 2,
    "sqft": 1050,
    "dimensions": "18' x 66'",
    "style": "Modern Farmhouse",
    "description": "Modern farmhouse appeal in a convenient single-wide section! Built-in desk nook, farmhouse sink, and spacious master closet.",
    "highlights": [
      "Farmhouse Apron Sink & Floating Shelves",
      "Built-in Computer Work Station",
      "Heavy-Duty Weather-Proof Siding"
    ],
    "features": [
      "Energy-Efficient LED Lighting Package",
      "Thermal Insulated Exterior Doors"
    ],
    "specs": [
      {
        "label": "Roof Pitch",
        "value": "3.5/12 Pitch"
      },
      {
        "label": "Insulation",
        "value": "R-14 Floor / R-11 Wall / R-22 Roof"
      }
    ],
    "images": [
      "https://regentstorage.blob.core.windows.net/regent-public/a88fff9ebad647d586f5d67b6442daac.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/45440a9adc404242b74840e884186950.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/66a05078a42445e0b47744e518d76030.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/aed9c813806040459e63bc103876bbc6.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/923e52dbf99840b3a8a51a968073fe77.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/e6a7815b08f543808eafab443f5cc70d.png",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": true,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-pinnacle",
    "name": "The Pinnacle Estate",
    "tagline": "Spacious 5-bedroom double-wide designed for growing families",
    "sectionType": "Double-Wide",
    "price": 145000,
    "startingEstMonthly": 812,
    "beds": 5,
    "baths": 3,
    "sqft": 1650,
    "dimensions": "28' x 70'",
    "style": "Craftsman Haven",
    "description": "Need extra space? The Pinnacle provides 5 bedrooms and 3 full baths with an expansive living room, formal dining space, and walk-in pantry.",
    "highlights": [
      "5 Bedrooms for Big Families & Guests",
      "3 Full Bathrooms",
      "Expansive Open Living & Dining Room"
    ],
    "features": [
      "Heavy I-Beam Frame Construction",
      "Thermal Low-E Vinyl Windows"
    ],
    "specs": [
      {
        "label": "Roof Pitch",
        "value": "4/12 Pitch"
      },
      {
        "label": "Insulation",
        "value": "R-22 Floor / R-11 Wall / R-30 Roof"
      }
    ],
    "images": [
      "https://regentstorage.blob.core.windows.net/regent-public/e5f0e083df444e5f8c7f9672540e2352.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/7815f3545b5942479bed8dee5f2259a9.JPG",
      "https://regentstorage.blob.core.windows.net/regent-public/c3b873c402b14849a95dc36c4287a16c.JPG",
      "https://regentstorage.blob.core.windows.net/regent-public/00c2bb7b4bf9411690bd4b0242851242.JPG",
      "https://regentstorage.blob.core.windows.net/regent-public/3e7facc6fc4d490d838def00ce1498cd.JPG"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/3c4ba33a33eb4625a325ad7f8ac30751.png",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": true,
    "isBestSeller": false,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-big-sky",
    "name": "The Big Sky Modular",
    "tagline": "Elegant 4-bedroom modular home with open beam ceilings",
    "sectionType": "Modular",
    "price": 198000,
    "startingEstMonthly": 1109,
    "beds": 4,
    "baths": 2,
    "sqft": 2200,
    "dimensions": "32' x 76'",
    "style": "Southern Elegance",
    "description": "Under the Big Sky! Featuring cathedral timber ceilings, a central kitchen island with seating, a mudroom, and a luxury primary bathroom.",
    "highlights": [
      "Cathedral Ceiling with Exposed Beams",
      "Gourmet Kitchen Island Bar",
      "Spacious Primary Retreat"
    ],
    "features": [
      "Site-Built Style Wall Framing",
      "High-Efficiency Insulation Package"
    ],
    "specs": [
      {
        "label": "Roof Pitch",
        "value": "6/12 Pitch"
      },
      {
        "label": "Insulation",
        "value": "R-30 Floor / R-19 Wall / R-38 Roof"
      }
    ],
    "images": [
      "https://regentstorage.blob.core.windows.net/regent-public/0d2643a923474491bd19719bf35c0b5a.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/a34cfe096cd24d348f23c922f54134c2.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/d6e3b7e149a54a1e9005af4fe68eef27.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/4bb540babc54448e97a9664e480f99ef.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/79a7ba7125d643749ff6c51059cf1236.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/a223d040dcc2446583a4ea87a819fb7e.png",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": true,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-yellowstone",
    "name": "The Yellowstone Lodge",
    "tagline": "4-Bedroom modular sanctuary built for woodland & country sites",
    "sectionType": "Modular",
    "price": 215000,
    "startingEstMonthly": 1204,
    "beds": 4,
    "baths": 3,
    "sqft": 2200,
    "dimensions": "32' x 80'",
    "style": "Minimalist Lodge",
    "description": "Warm cedar tones and mountain lodge charm! The Yellowstone offers 4 full bedrooms, 3 baths, a stone fireplace, and a covered porch.",
    "highlights": [
      "Rustic Cedar Exterior Accents",
      "Stone Hearth Fireplace",
      "Double Master Bath Vanity"
    ],
    "features": [
      "Heavy-Duty Modular Floor Framing",
      "Energy Star® Heating & Cooling"
    ],
    "specs": [
      {
        "label": "Roof Pitch",
        "value": "6/12 Pitch"
      },
      {
        "label": "Insulation",
        "value": "R-30 Floor / R-21 Wall / R-38 Roof"
      }
    ],
    "images": [
      "https://regentstorage.blob.core.windows.net/regent-public/e078938798f64707ba77f6c359f9ce8e.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/97e16e69b9984ce180dec30aaab87713.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/bb669f36cbe348499cdbfd4c5b54abb6.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/e10da1fd22df4a1fa1b2e12ee6338df3.webp"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/935f905dc68345c29904b467e9a731b0.png",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": true,
    "isBestSeller": false,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-fall-creek-3-0",
    "name": "The Fall Creek 3.0",
    "tagline": "Warm farmhouse double-wide with open island kitchen & pantry",
    "sectionType": "Double-Wide",
    "price": 132000,
    "startingEstMonthly": 739,
    "beds": 3,
    "baths": 2,
    "sqft": 1650,
    "dimensions": "28' x 64'",
    "style": "Modern Farmhouse",
    "description": "Fall in love with Fall Creek! Sunlit living space, barn door accents, open island kitchen, and a master retreat with dual sinks.",
    "highlights": [
      "Sliding Barn Door Accent Features",
      "Large Center Island with Bar Seating",
      "Walk-in Master Closet"
    ],
    "features": [
      "Low-E Argon Double Pane Windows",
      "Full Factory Certified Insulation"
    ],
    "specs": [
      {
        "label": "Roof Pitch",
        "value": "4/12 Pitch"
      },
      {
        "label": "Insulation",
        "value": "R-22 Floor / R-11 Wall / R-30 Roof"
      }
    ],
    "images": [
      "https://regentstorage.blob.core.windows.net/regent-public/aba90cc7afdc47a58b441ead91e67d97.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/d2345d041c25426b8ce98ca0fef02600.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/91ecf2c887f3465b9675cefd0e5f6ce3.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/f20b49158794481d884a50fb26d03a50.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/3217fc4094cb45629fc8720a3455e540.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/e6a7815b08f543808eafab443f5cc70d.png",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": true,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-delashaw",
    "name": "The Delashaw Cottage",
    "tagline": "Cozy 3-bedroom double-wide with warm oak cabinetry",
    "sectionType": "Double-Wide",
    "price": 129000,
    "startingEstMonthly": 722,
    "beds": 3,
    "baths": 2,
    "sqft": 1650,
    "dimensions": "28' x 60'",
    "style": "Rustic Cottage",
    "description": "Built for practical comfort and warmth. The Delashaw offers rich oak cabinets, an open-concept Great Room, and easy utility hookups.",
    "highlights": [
      "Solid Warm Oak Cabinetry",
      "Open Great Room Layout",
      "Energy Efficient Climate Control"
    ],
    "features": [
      "Heavy-Duty Subflooring System",
      "Full Factory Warranty Protection"
    ],
    "specs": [
      {
        "label": "Roof Pitch",
        "value": "4/12 Pitch"
      },
      {
        "label": "Insulation",
        "value": "R-22 Floor / R-11 Wall / R-30 Roof"
      }
    ],
    "images": [
      "https://regentstorage.blob.core.windows.net/regent-public/d37b4f4983864d0aa0f9fb0ecd027a5b.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/1ac1f30b221041bca3ea1a6b366a210f.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/9f5faee30f8e4961840a15371ad47c9a.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/09838891fc1348c5b7332e742eab4bcc.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/1ea36901f96549b987717c681e9a0f1e.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/a223d040dcc2446583a4ea87a819fb7e.png",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": false,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-bourbon",
    "name": "The Bourbon Estate",
    "tagline": "Spacious 4-bedroom double-wide with southern porch styling",
    "sectionType": "Double-Wide",
    "price": 139000,
    "startingEstMonthly": 778,
    "beds": 4,
    "baths": 2,
    "sqft": 1650,
    "dimensions": "28' x 68'",
    "style": "Southern Elegance",
    "description": "Classic southern hospitality! The Bourbon features 4 full bedrooms, a sprawling living room, and an island kitchen ideal for hosting family dinners.",
    "highlights": [
      "4 Large Bedrooms",
      "Southern Porch Elevation Options",
      "Spacious Island Kitchen"
    ],
    "features": [
      "Vinyl Plank Easy-Clean Flooring",
      "Carrier Heat Pump System"
    ],
    "specs": [
      {
        "label": "Roof Pitch",
        "value": "4/12 Pitch"
      },
      {
        "label": "Insulation",
        "value": "R-22 Floor / R-11 Wall / R-30 Roof"
      }
    ],
    "images": [
      "https://regentstorage.blob.core.windows.net/regent-public/8263df349fe546e9a8210cb93cfa624b.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/4886f6617f174efa9e9e437631c431d2.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/ba6a1507791e4b58bc4ea6841808c539.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/1fddbcf3342349a2b221c68453c86ed4.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/c37590a096cb4c629ac24bcc4e10acd5.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/da3ff46111b44868907148fff4ca7d45.png",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": true,
    "isBestSeller": true,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-magnolia-series",
    "name": "The Magnolia Classic",
    "tagline": "4-Bedroom modern farmhouse with soaking tub & utility mudroom",
    "sectionType": "Double-Wide",
    "price": 142000,
    "startingEstMonthly": 795,
    "beds": 4,
    "baths": 2,
    "sqft": 1650,
    "dimensions": "28' x 70'",
    "style": "Modern Farmhouse",
    "description": "A true classic! The Magnolia offers 4 bedrooms, a dedicated utility mudroom, a spa soaking tub, and built-in entertainment shelving.",
    "highlights": [
      "4 Bedrooms + Utility Mudroom",
      "Free-Standing Soaking Tub",
      "Built-in Entertainment Center"
    ],
    "features": [
      "Heavy Frame Construction",
      "Low-E Argon Windows"
    ],
    "specs": [
      {
        "label": "Roof Pitch",
        "value": "4/12 Pitch"
      },
      {
        "label": "Insulation",
        "value": "R-22 Floor / R-11 Wall / R-30 Roof"
      }
    ],
    "images": [
      "https://regentstorage.blob.core.windows.net/regent-public/4d609d1df523456194f79d3270716ac0.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/4c0f8dfe41ff472bbb9aed90e2e3cb99.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/4fbe8aa0062b4bf6a46ecf3f7c46de6a.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/98db4863a5fb467f85a5e933a54224b4.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/5469f45092e3497e89004e3bfcae1776.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/25426e2f0c7a4b1ea0e770ec1823375f.png",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": true,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-ace",
    "name": "The Ace Single-Wide",
    "tagline": "Modern 2-bedroom single-wide designed for stylish affordable living",
    "sectionType": "Single-Wide",
    "price": 69900,
    "startingEstMonthly": 391,
    "beds": 2,
    "baths": 2,
    "sqft": 1050,
    "dimensions": "16' x 60'",
    "style": "Minimalist Lodge",
    "description": "Stylish simplicity! The Ace provides 2 full bedrooms, 2 full baths, an open kitchen bar, and ultra-low monthly energy bills.",
    "highlights": [
      "2 Bedrooms & 2 Full Baths",
      "Open Kitchen Bar with Pantry",
      "Affordable Starter Home Pricing"
    ],
    "features": [
      "Vinyl Siding & Shingle Roof",
      "Thermal Insulated Exterior Envelope"
    ],
    "specs": [
      {
        "label": "Roof Pitch",
        "value": "3/12 Pitch"
      },
      {
        "label": "Insulation",
        "value": "R-14 Floor / R-11 Wall / R-22 Roof"
      }
    ],
    "images": [
      "https://regentstorage.blob.core.windows.net/regent-public/f09cdce379904448a4c7561d889bfa2c.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/3d3f2a00f2f04043807fae8e2e75966c.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/de5d677f48c44ea795b46f103baba9db.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/d0c27ed05bbc47dcb15cdf5d725546fc.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/3f8a5346646f496ca2538657d3f039e3.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/a223d040dcc2446583a4ea87a819fb7e.png",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": true,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-eva",
    "name": "The Eva Cottage",
    "tagline": "Cozy 3-bedroom single-wide with bright sunlit windows",
    "sectionType": "Single-Wide",
    "price": 72500,
    "startingEstMonthly": 406,
    "beds": 3,
    "baths": 2,
    "sqft": 1050,
    "dimensions": "16' x 64'",
    "style": "Rustic Cottage",
    "description": "Warm and inviting! The Eva brings 3 bedrooms into a single-section layout with light oak finishes and energy-efficient appliances.",
    "highlights": [
      "3 Bedrooms & 2 Baths",
      "Light Oak Cabinet Finish",
      "Built-in Linen Closets"
    ],
    "features": [
      "Energy Efficient Heating & Cooling",
      "Heavy Duty Steel Frame"
    ],
    "specs": [
      {
        "label": "Roof Pitch",
        "value": "3/12 Pitch"
      },
      {
        "label": "Insulation",
        "value": "R-14 Floor / R-11 Wall / R-22 Roof"
      }
    ],
    "images": [
      "https://regentstorage.blob.core.windows.net/regent-public/e6d1078149754c92ae41e8ccb7ac03dd.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/774e0446547c497b92a7c95f540462f1.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/bd9e4e53c40e444fa90b1c9bce85ebff.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/f1faf290c11e4d4eb83222b05739dc0d.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/f0445f8fbbf64f15beec9c0536635707.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/a223d040dcc2446583a4ea87a819fb7e.png",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": false,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-charleston",
    "name": "The Charleston Haven",
    "tagline": "Elegant 3-bedroom double-wide with plantation-style front porch",
    "sectionType": "Double-Wide",
    "price": 155000,
    "startingEstMonthly": 868,
    "beds": 3,
    "baths": 2,
    "sqft": 1650,
    "dimensions": "28' x 68'",
    "style": "Southern Elegance",
    "description": "Timeless elegance! The Charleston features plantation-style porch options, high ceilings, a grand kitchen, and a luxurious primary bedroom.",
    "highlights": [
      "Covered Front Porch Elevation",
      "Gourmet Kitchen with Center Island",
      "Spacious Primary Retreat with Dual Vanities"
    ],
    "features": [
      "James Hardie® Exterior Siding",
      "Thermal Low-E Windows"
    ],
    "specs": [
      {
        "label": "Roof Pitch",
        "value": "4/12 Pitch"
      },
      {
        "label": "Insulation",
        "value": "R-22 Floor / R-11 Wall / R-30 Roof"
      }
    ],
    "images": [
      "https://regentstorage.blob.core.windows.net/regent-public/1caa976c6ca140c7907a4edfe32fd639.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/4694473d22f84f6786245135e42eca52.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/c55b8acb293e4b31848252baf3ee8c59.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/0098be32539c4a379407c138a2b65641.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/398911e31c154faf83e0e586e386b1f1.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/e6a7815b08f543808eafab443f5cc70d.png",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": true,
    "isBestSeller": true,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-yellowstone-craftsman",
    "name": "The Yellowstone Craftsman",
    "tagline": "4-Bedroom modular estate with stone hearth & rustic timber beams",
    "sectionType": "Modular",
    "price": 205000,
    "startingEstMonthly": 1148,
    "beds": 4,
    "baths": 2,
    "sqft": 2200,
    "dimensions": "32' x 78'",
    "style": "Craftsman Haven",
    "description": "Craftsman warmth and modular strength! Features 4 bedrooms, stone fireplace, custom cabinets, and Energy Star insulation.",
    "highlights": [
      "Stacked Stone Fireplace",
      "4 Bedrooms + Laundry Station",
      "High-Efficiency Climate Control"
    ],
    "features": [
      "Modular Code Approved Framing",
      "Pella® Insulated Windows"
    ],
    "specs": [
      {
        "label": "Roof Pitch",
        "value": "6/12 Pitch"
      },
      {
        "label": "Insulation",
        "value": "R-30 Floor / R-19 Wall / R-38 Roof"
      }
    ],
    "images": [
      "https://regentstorage.blob.core.windows.net/regent-public/d64f997e53cd42a2be566d09a01641f4.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/0fb533857cf149888d5d93783e40fbe6.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/aedb8579eba84edf9d038a9689f7516b.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/aab46bac2d0540bc8908ff5ae6ef99bc.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/27f96edf9d384452aca239b6e436ce86.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/a223d040dcc2446583a4ea87a819fb7e.png",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": false,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-kinlock-falls",
    "name": "The Kinlock Falls",
    "tagline": "Modern 4-bedroom farmhouse double-wide with open island kitchen",
    "sectionType": "Double-Wide",
    "price": 148000,
    "startingEstMonthly": 829,
    "beds": 4,
    "baths": 2,
    "sqft": 1650,
    "dimensions": "28' x 68'",
    "style": "Modern Farmhouse",
    "description": "Designed for modern family living! The Kinlock Falls features 4 bedrooms, barn door accents, open island kitchen, and a master suite soaking tub.",
    "highlights": [
      "4 Full Bedrooms",
      "Sliding Barn Door Accents",
      "Chef Kitchen Island Bar"
    ],
    "features": [
      "Drywall Interior with Warm Paint",
      "Thermal Low-E Windows"
    ],
    "specs": [
      {
        "label": "Roof Pitch",
        "value": "4/12 Pitch"
      },
      {
        "label": "Insulation",
        "value": "R-22 Floor / R-11 Wall / R-30 Roof"
      }
    ],
    "images": [
      "https://regentstorage.blob.core.windows.net/regent-public/2cda6eee41fd449398ceafb774b5d24c.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/8a4cd0d5f9bf43f0a14dd66068993a56.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/bafddb0035d0487ab57aad7bb8b351ec.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/e2652734138f4cfbae2876912bf69b28.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/3ba2dce7eadf4192bf8552af6796310e.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/a223d040dcc2446583a4ea87a819fb7e.png",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": true,
    "isBestSeller": true,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-fay",
    "name": "The Fay",
    "tagline": "Beautiful 3-bedroom single-wide featuring open living space & factory precision",
    "sectionType": "Single-Wide",
    "price": 68500,
    "startingEstMonthly": 384,
    "beds": 3,
    "baths": 2,
    "sqft": 1080,
    "dimensions": "16' x 64'",
    "style": "Rustic Cottage",
    "description": "Designed for warmth and hospitality! The Fay offers 3 bedrooms, 2 baths, an open kitchen layout, and energy-efficient construction.",
    "highlights": [
      "3 Bedrooms & 2 Baths",
      "Open-Concept Living & Dining Area",
      "Energy Star® Certified High-Efficiency Insulation"
    ],
    "features": [
      "Drywall Interior with Warm Paint Finish",
      "Thermal Low-E Argon Windows",
      "30-Year Architectural Shingle Roof"
    ],
    "specs": [
      {
        "label": "Roof Pitch",
        "value": "4/12 Pitch"
      },
      {
        "label": "Insulation",
        "value": "R-22 Floor / R-11 Wall / R-30 Roof"
      }
    ],
    "images": [
      "https://regentstorage.blob.core.windows.net/regent-public/9517cc830e7a43ba96e0fb0478384765.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/600f59667c88470f81528b743cb6181f.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/4b67e6c8efb042f799f3640256fc0035.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/444f1235e85945c8a5938e099ea530ac.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/79c33045c8c244a68adaed7b9a48504b.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/a223d040dcc2446583a4ea87a819fb7e.png",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": false,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-iris",
    "name": "The Iris",
    "tagline": "Beautiful 4-bedroom single-wide featuring open living space & factory precision",
    "sectionType": "Single-Wide",
    "price": 71900,
    "startingEstMonthly": 403,
    "beds": 4,
    "baths": 2,
    "sqft": 1080,
    "dimensions": "16' x 64'",
    "style": "Modern Farmhouse",
    "description": "Designed for warmth and hospitality! The Iris offers 4 bedrooms, 2 baths, an open kitchen layout, and energy-efficient construction.",
    "highlights": [
      "4 Bedrooms & 2 Baths",
      "Open-Concept Living & Dining Area",
      "Energy Star® Certified High-Efficiency Insulation"
    ],
    "features": [
      "Drywall Interior with Warm Paint Finish",
      "Thermal Low-E Argon Windows",
      "30-Year Architectural Shingle Roof"
    ],
    "specs": [
      {
        "label": "Roof Pitch",
        "value": "4/12 Pitch"
      },
      {
        "label": "Insulation",
        "value": "R-22 Floor / R-11 Wall / R-30 Roof"
      }
    ],
    "images": [
      "https://regentstorage.blob.core.windows.net/regent-public/51e4baa16bfa48499942f002c5dca466.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/2c6b96eea227402eabe1afccaaa2252f.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/768effda5a79480599a0ce1e11f06e4d.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/9fb296f3977140c596c81f7fb4748984.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/eaecf3efbefb45e4a62a4a2d7ad33fbd.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/a223d040dcc2446583a4ea87a819fb7e.png",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": false,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-juno",
    "name": "The Juno",
    "tagline": "Beautiful 4-bedroom single-wide featuring open living space & factory precision",
    "sectionType": "Single-Wide",
    "price": 73500,
    "startingEstMonthly": 412,
    "beds": 4,
    "baths": 2,
    "sqft": 1080,
    "dimensions": "16' x 64'",
    "style": "Minimalist Lodge",
    "description": "Designed for warmth and hospitality! The Juno offers 4 bedrooms, 2 baths, an open kitchen layout, and energy-efficient construction.",
    "highlights": [
      "4 Bedrooms & 2 Baths",
      "Open-Concept Living & Dining Area",
      "Energy Star® Certified High-Efficiency Insulation"
    ],
    "features": [
      "Drywall Interior with Warm Paint Finish",
      "Thermal Low-E Argon Windows",
      "30-Year Architectural Shingle Roof"
    ],
    "specs": [
      {
        "label": "Roof Pitch",
        "value": "4/12 Pitch"
      },
      {
        "label": "Insulation",
        "value": "R-22 Floor / R-11 Wall / R-30 Roof"
      }
    ],
    "images": [
      "https://regentstorage.blob.core.windows.net/regent-public/f10e327cc7ad42b6bdf7524cedc39aea.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/0b024162a9a0443fb1b3effc49b050e1.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/d70b8663bfb94252a3fc67643c4bf2dc.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/ba25efff14cf4dd4b1d5728a297caef4.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/699349b501244268b101ee6902ae200e.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/a223d040dcc2446583a4ea87a819fb7e.png",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": false,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-levi",
    "name": "The Levi",
    "tagline": "Beautiful 4-bedroom single-wide featuring open living space & factory precision",
    "sectionType": "Single-Wide",
    "price": 76000,
    "startingEstMonthly": 426,
    "beds": 4,
    "baths": 2,
    "sqft": 1080,
    "dimensions": "16' x 64'",
    "style": "Rustic Cottage",
    "description": "Designed for warmth and hospitality! The Levi offers 4 bedrooms, 2 baths, an open kitchen layout, and energy-efficient construction.",
    "highlights": [
      "4 Bedrooms & 2 Baths",
      "Open-Concept Living & Dining Area",
      "Energy Star® Certified High-Efficiency Insulation"
    ],
    "features": [
      "Drywall Interior with Warm Paint Finish",
      "Thermal Low-E Argon Windows",
      "30-Year Architectural Shingle Roof"
    ],
    "specs": [
      {
        "label": "Roof Pitch",
        "value": "4/12 Pitch"
      },
      {
        "label": "Insulation",
        "value": "R-22 Floor / R-11 Wall / R-30 Roof"
      }
    ],
    "images": [
      "https://regentstorage.blob.core.windows.net/regent-public/228862abc3814b848f315a68cbfb9bea.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/bb99b3cde3934ed0bc7f31e7d8ac5cf2.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/28323bcc327e4bcbabd487824244a79a.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/5a13429986094f7a8c37eb46841d4140.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/fbdd22c2645f452583448cb49e1ff175.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/a223d040dcc2446583a4ea87a819fb7e.png",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": true,
    "isBestSeller": true,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-luna",
    "name": "The Luna",
    "tagline": "Beautiful 3-bedroom single-wide featuring open living space & factory precision",
    "sectionType": "Single-Wide",
    "price": 78900,
    "startingEstMonthly": 442,
    "beds": 3,
    "baths": 2,
    "sqft": 1080,
    "dimensions": "16' x 64'",
    "style": "Southern Elegance",
    "description": "Designed for warmth and hospitality! The Luna offers 3 bedrooms, 2 baths, an open kitchen layout, and energy-efficient construction.",
    "highlights": [
      "3 Bedrooms & 2 Baths",
      "Open-Concept Living & Dining Area",
      "Energy Star® Certified High-Efficiency Insulation"
    ],
    "features": [
      "Drywall Interior with Warm Paint Finish",
      "Thermal Low-E Argon Windows",
      "30-Year Architectural Shingle Roof"
    ],
    "specs": [
      {
        "label": "Roof Pitch",
        "value": "4/12 Pitch"
      },
      {
        "label": "Insulation",
        "value": "R-22 Floor / R-11 Wall / R-30 Roof"
      }
    ],
    "images": [
      "https://regentstorage.blob.core.windows.net/regent-public/7138d25c980f49ea8a7e90ae951f330f.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/ce8ba9fb068b45c9b012d7695c6fd406.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/054b32093f45466bbd51398509af5d18.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/6fa8d95e6db64d7aaf5aa43fb11e50aa.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/4f7b5f97378d4f04ba0c6c61cde41e08.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/a223d040dcc2446583a4ea87a819fb7e.png",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": true,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-nova",
    "name": "The Nova",
    "tagline": "Beautiful 3-bedroom single-wide featuring open living space & factory precision",
    "sectionType": "Single-Wide",
    "price": 81000,
    "startingEstMonthly": 454,
    "beds": 3,
    "baths": 2,
    "sqft": 1080,
    "dimensions": "16' x 64'",
    "style": "Modern Farmhouse",
    "description": "Designed for warmth and hospitality! The Nova offers 3 bedrooms, 2 baths, an open kitchen layout, and energy-efficient construction.",
    "highlights": [
      "3 Bedrooms & 2 Baths",
      "Open-Concept Living & Dining Area",
      "Energy Star® Certified High-Efficiency Insulation"
    ],
    "features": [
      "Drywall Interior with Warm Paint Finish",
      "Thermal Low-E Argon Windows",
      "30-Year Architectural Shingle Roof"
    ],
    "specs": [
      {
        "label": "Roof Pitch",
        "value": "4/12 Pitch"
      },
      {
        "label": "Insulation",
        "value": "R-22 Floor / R-11 Wall / R-30 Roof"
      }
    ],
    "images": [
      "https://regentstorage.blob.core.windows.net/regent-public/048ebd6393234df3b9ab7351e5e51dbc.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/f98d35d3d9e14c4ebb6f6c50b786cc2a.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/04fb3420a5484754911b886c3987231d.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/aaa221e032574ca19304aa14fb7cb095.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/752db7debe954f5e9e8f776a0bcfac83.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/a223d040dcc2446583a4ea87a819fb7e.png",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": false,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-palmview",
    "name": "The Palmview",
    "tagline": "Beautiful 1-bedroom double-wide featuring open living space & factory precision",
    "sectionType": "Double-Wide",
    "price": 128000,
    "startingEstMonthly": 717,
    "beds": 1,
    "baths": 1,
    "sqft": 1680,
    "dimensions": "28' x 64'",
    "style": "Southern Elegance",
    "description": "Designed for warmth and hospitality! The Palmview offers 1 bedrooms, 1 baths, an open kitchen layout, and energy-efficient construction.",
    "highlights": [
      "1 Bedrooms & 1 Baths",
      "Open-Concept Living & Dining Area",
      "Energy Star® Certified High-Efficiency Insulation"
    ],
    "features": [
      "Drywall Interior with Warm Paint Finish",
      "Thermal Low-E Argon Windows",
      "30-Year Architectural Shingle Roof"
    ],
    "specs": [
      {
        "label": "Roof Pitch",
        "value": "4/12 Pitch"
      },
      {
        "label": "Insulation",
        "value": "R-22 Floor / R-11 Wall / R-30 Roof"
      }
    ],
    "images": [
      "https://regentstorage.blob.core.windows.net/regent-public/20863e1509a74d71a01db2f0a3794890.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/dd2976c509214da8ad13be2852a087b2.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/ebb8348cb0c24126812bee3d664ec386.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/162e632234b94abd8cd8683d639af9b8.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/3ac0db1e65734eb2992afd86627e2cfb.jpeg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/3bac9b9f22cc41b3ad3c00f3aa234069.png",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": false,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-shorebreak",
    "name": "The Shorebreak",
    "tagline": "Beautiful 1-bedroom double-wide featuring open living space & factory precision",
    "sectionType": "Double-Wide",
    "price": 135000,
    "startingEstMonthly": 756,
    "beds": 1,
    "baths": 1,
    "sqft": 1680,
    "dimensions": "28' x 64'",
    "style": "Southern Elegance",
    "description": "Designed for warmth and hospitality! The Shorebreak offers 1 bedrooms, 1 baths, an open kitchen layout, and energy-efficient construction.",
    "highlights": [
      "1 Bedrooms & 1 Baths",
      "Open-Concept Living & Dining Area",
      "Energy Star® Certified High-Efficiency Insulation"
    ],
    "features": [
      "Drywall Interior with Warm Paint Finish",
      "Thermal Low-E Argon Windows",
      "30-Year Architectural Shingle Roof"
    ],
    "specs": [
      {
        "label": "Roof Pitch",
        "value": "4/12 Pitch"
      },
      {
        "label": "Insulation",
        "value": "R-22 Floor / R-11 Wall / R-30 Roof"
      }
    ],
    "images": [
      "https://regentstorage.blob.core.windows.net/regent-public/620acba3aeca40fbbc4e00044f616907.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/97ac3583ee5145a3a15b093c47ebd147.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/acb48551b4a04261a4db2b12d62abb8e.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/291fecaa56974e459f40e3e97c73f95a.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/e172a7c6fc3941cca816173224b26ed4.jpeg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/677cd922fea5472a9f6777118bf2e081.png",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": false,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-cedar-creek-3276h42106",
    "name": "The Cedar Creek 3276H42106",
    "tagline": "Beautiful 4-bedroom modular featuring open living space & factory precision",
    "sectionType": "Modular",
    "price": 192000,
    "startingEstMonthly": 1075,
    "beds": 4,
    "baths": 2,
    "sqft": 2250,
    "dimensions": "32' x 76'",
    "style": "Craftsman Haven",
    "description": "Designed for warmth and hospitality! The Cedar Creek 3276H42106 offers 4 bedrooms, 2 baths, an open kitchen layout, and energy-efficient construction.",
    "highlights": [
      "4 Bedrooms & 2 Baths",
      "Open-Concept Living & Dining Area",
      "Energy Star® Certified High-Efficiency Insulation"
    ],
    "features": [
      "Drywall Interior with Warm Paint Finish",
      "Thermal Low-E Argon Windows",
      "30-Year Architectural Shingle Roof"
    ],
    "specs": [
      {
        "label": "Roof Pitch",
        "value": "4/12 Pitch"
      },
      {
        "label": "Insulation",
        "value": "R-22 Floor / R-11 Wall / R-30 Roof"
      }
    ],
    "images": [
      "https://regentstorage.blob.core.windows.net/regent-public/cff7c042aed8477eba86c5ea451c05c7.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/efaf359dd7404fa9862f28e536bc969b.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/fcfd0bc32f0e4fa6b3d3dd4783041844.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/0ddeedc7de624b45b753fef0e20b0045.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/3efcc9b02922485ca56d696292e673a9.webp"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/e6a7815b08f543808eafab443f5cc70d.png",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": false,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-cypress-creek-cottage",
    "name": "The Cypress Creek Cottage",
    "tagline": "Beautiful 3-bedroom single-wide featuring open living space & factory precision",
    "sectionType": "Single-Wide",
    "price": 82000,
    "startingEstMonthly": 459,
    "beds": 3,
    "baths": 2,
    "sqft": 1080,
    "dimensions": "16' x 64'",
    "style": "Rustic Cottage",
    "description": "Designed for warmth and hospitality! The Cypress Creek Cottage offers 3 bedrooms, 2 baths, an open kitchen layout, and energy-efficient construction.",
    "highlights": [
      "3 Bedrooms & 2 Baths",
      "Open-Concept Living & Dining Area",
      "Energy Star® Certified High-Efficiency Insulation"
    ],
    "features": [
      "Drywall Interior with Warm Paint Finish",
      "Thermal Low-E Argon Windows",
      "30-Year Architectural Shingle Roof"
    ],
    "specs": [
      {
        "label": "Roof Pitch",
        "value": "4/12 Pitch"
      },
      {
        "label": "Insulation",
        "value": "R-22 Floor / R-11 Wall / R-30 Roof"
      }
    ],
    "images": [
      "https://regentstorage.blob.core.windows.net/regent-public/978c4456f62e42d79cdfefae8a9a83d9.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/732ca7f9a08b4cd0b5bd0add7a68b4f1.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/70b9330320744118a1bb6684a068a49c.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/850b529b5f254b21be3a32500f7507d8.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/551ba7cda5b141108b9d097d249f8cb8.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/52fd5d3f4967408097f0041a1fc9dde5.png",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": false,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-churchill",
    "name": "The Churchill",
    "tagline": "Beautiful 3-bedroom double-wide featuring open living space & factory precision",
    "sectionType": "Double-Wide",
    "price": 149000,
    "startingEstMonthly": 834,
    "beds": 3,
    "baths": 2,
    "sqft": 1680,
    "dimensions": "28' x 64'",
    "style": "Craftsman Haven",
    "description": "Designed for warmth and hospitality! The Churchill offers 3 bedrooms, 2 baths, an open kitchen layout, and energy-efficient construction.",
    "highlights": [
      "3 Bedrooms & 2 Baths",
      "Open-Concept Living & Dining Area",
      "Energy Star® Certified High-Efficiency Insulation"
    ],
    "features": [
      "Drywall Interior with Warm Paint Finish",
      "Thermal Low-E Argon Windows",
      "30-Year Architectural Shingle Roof"
    ],
    "specs": [
      {
        "label": "Roof Pitch",
        "value": "4/12 Pitch"
      },
      {
        "label": "Insulation",
        "value": "R-22 Floor / R-11 Wall / R-30 Roof"
      }
    ],
    "images": [
      "https://regentstorage.blob.core.windows.net/regent-public/e5fa0258a4114a0685280d2691df1f71.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/52a038ecaa4b4dc2978c99caa2a7f5fb.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/3775940fdef34a28ba83ef45191546ff.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/8c92a531575b41d8b772dfec015a498b.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/93ad8155c32d4168ac4794f23d2d5d67.webp"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/d132b8e9244441ed889076e96137c03b.png",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": true,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-crown",
    "name": "The Crown",
    "tagline": "Beautiful 4-bedroom double-wide featuring open living space & factory precision",
    "sectionType": "Double-Wide",
    "price": 152000,
    "startingEstMonthly": 851,
    "beds": 4,
    "baths": 2,
    "sqft": 1680,
    "dimensions": "28' x 64'",
    "style": "Southern Elegance",
    "description": "Designed for warmth and hospitality! The Crown offers 4 bedrooms, 2 baths, an open kitchen layout, and energy-efficient construction.",
    "highlights": [
      "4 Bedrooms & 2 Baths",
      "Open-Concept Living & Dining Area",
      "Energy Star® Certified High-Efficiency Insulation"
    ],
    "features": [
      "Drywall Interior with Warm Paint Finish",
      "Thermal Low-E Argon Windows",
      "30-Year Architectural Shingle Roof"
    ],
    "specs": [
      {
        "label": "Roof Pitch",
        "value": "4/12 Pitch"
      },
      {
        "label": "Insulation",
        "value": "R-22 Floor / R-11 Wall / R-30 Roof"
      }
    ],
    "images": [
      "https://regentstorage.blob.core.windows.net/regent-public/65158b562d6f42e0a8febaf14da99032.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/a793b7126bac4904b2146259960b49c7.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/b1026a316bef4d288a5c51a48a08e422.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/a53874d178ce4171a7d11fd15995de13.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/bd30412d9dc04f54825b621f3736dc9e.webp"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/57115ee87f444a13b2d6207e4fa09d33.png",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": false,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-ridge",
    "name": "The Ridge",
    "tagline": "Beautiful 3-bedroom double-wide featuring open living space & factory precision",
    "sectionType": "Double-Wide",
    "price": 136000,
    "startingEstMonthly": 762,
    "beds": 3,
    "baths": 2,
    "sqft": 1680,
    "dimensions": "28' x 64'",
    "style": "Rustic Cottage",
    "description": "Designed for warmth and hospitality! The Ridge offers 3 bedrooms, 2 baths, an open kitchen layout, and energy-efficient construction.",
    "highlights": [
      "3 Bedrooms & 2 Baths",
      "Open-Concept Living & Dining Area",
      "Energy Star® Certified High-Efficiency Insulation"
    ],
    "features": [
      "Drywall Interior with Warm Paint Finish",
      "Thermal Low-E Argon Windows",
      "30-Year Architectural Shingle Roof"
    ],
    "specs": [
      {
        "label": "Roof Pitch",
        "value": "4/12 Pitch"
      },
      {
        "label": "Insulation",
        "value": "R-22 Floor / R-11 Wall / R-30 Roof"
      }
    ],
    "images": [
      "https://regentstorage.blob.core.windows.net/regent-public/031c835ed9184f0facb6713283939411.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/e52bb574b9484f43972a2d401d3e533a.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/640d427d5c4345089104e2fc3d34f12f.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/eead6eceea3046569962074e4c3524b2.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/0d6f1769aceb4389ba0fdbb1fec5abb8.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/57115ee87f444a13b2d6207e4fa09d33.png",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": true,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-summit",
    "name": "The Summit",
    "tagline": "Beautiful 3-bedroom modular featuring open living space & factory precision",
    "sectionType": "Modular",
    "price": 210000,
    "startingEstMonthly": 1176,
    "beds": 3,
    "baths": 2,
    "sqft": 2250,
    "dimensions": "32' x 76'",
    "style": "Minimalist Lodge",
    "description": "Designed for warmth and hospitality! The Summit offers 3 bedrooms, 2 baths, an open kitchen layout, and energy-efficient construction.",
    "highlights": [
      "3 Bedrooms & 2 Baths",
      "Open-Concept Living & Dining Area",
      "Energy Star® Certified High-Efficiency Insulation"
    ],
    "features": [
      "Drywall Interior with Warm Paint Finish",
      "Thermal Low-E Argon Windows",
      "30-Year Architectural Shingle Roof"
    ],
    "specs": [
      {
        "label": "Roof Pitch",
        "value": "4/12 Pitch"
      },
      {
        "label": "Insulation",
        "value": "R-22 Floor / R-11 Wall / R-30 Roof"
      }
    ],
    "images": [
      "https://regentstorage.blob.core.windows.net/regent-public/6446cdad010646fc9e6d6d776233b733.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/f63381862a38485294bf2ecb9a0d59bd.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/ecab668071f948909ee55ae0c1146487.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/24c428ff068347dc950d1118bceece00.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/856c8a92613045bca2a602e7435a1d62.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/57115ee87f444a13b2d6207e4fa09d33.png",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": false,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-browning",
    "name": "The Browning",
    "tagline": "Beautiful 3-bedroom double-wide featuring open living space & factory precision",
    "sectionType": "Double-Wide",
    "price": 137500,
    "startingEstMonthly": 770,
    "beds": 3,
    "baths": 2,
    "sqft": 1680,
    "dimensions": "28' x 64'",
    "style": "Modern Farmhouse",
    "description": "Designed for warmth and hospitality! The Browning offers 3 bedrooms, 2 baths, an open kitchen layout, and energy-efficient construction.",
    "highlights": [
      "3 Bedrooms & 2 Baths",
      "Open-Concept Living & Dining Area",
      "Energy Star® Certified High-Efficiency Insulation"
    ],
    "features": [
      "Drywall Interior with Warm Paint Finish",
      "Thermal Low-E Argon Windows",
      "30-Year Architectural Shingle Roof"
    ],
    "specs": [
      {
        "label": "Roof Pitch",
        "value": "4/12 Pitch"
      },
      {
        "label": "Insulation",
        "value": "R-22 Floor / R-11 Wall / R-30 Roof"
      }
    ],
    "images": [
      "https://regentstorage.blob.core.windows.net/regent-public/df31ed426c41440e921260f73bf1e08e.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/728a4249e1ea46c0ad6ba08d602133e0.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/bc7d6256d1f846c9ab5976b0d2c62272.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/020c130fad65473f86f99e6b8ab0ab5b.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/bc73cdb44343429fa5b888c60b69d543.webp"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/9b0a408e0ab048779fa18457655a51b2.png",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": false,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-remington",
    "name": "The Remington",
    "tagline": "Beautiful 3-bedroom double-wide featuring open living space & factory precision",
    "sectionType": "Double-Wide",
    "price": 144000,
    "startingEstMonthly": 806,
    "beds": 3,
    "baths": 2,
    "sqft": 1680,
    "dimensions": "28' x 64'",
    "style": "Craftsman Haven",
    "description": "Designed for warmth and hospitality! The Remington offers 3 bedrooms, 2 baths, an open kitchen layout, and energy-efficient construction.",
    "highlights": [
      "3 Bedrooms & 2 Baths",
      "Open-Concept Living & Dining Area",
      "Energy Star® Certified High-Efficiency Insulation"
    ],
    "features": [
      "Drywall Interior with Warm Paint Finish",
      "Thermal Low-E Argon Windows",
      "30-Year Architectural Shingle Roof"
    ],
    "specs": [
      {
        "label": "Roof Pitch",
        "value": "4/12 Pitch"
      },
      {
        "label": "Insulation",
        "value": "R-22 Floor / R-11 Wall / R-30 Roof"
      }
    ],
    "images": [
      "https://regentstorage.blob.core.windows.net/regent-public/914fdcb6bd7a4111874fdb71159294aa.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/ab474d16575546dca9c4fcc5798386d3.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/ada5bc54e839482baa85db6fa3bd411d.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/02da81c6b47849dcbb2c8e83d6cbbf1b.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/2cc6502688794569a9feacabee4247c7.webp"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/2df2b341cbc64635823a48e47a1695ef.png",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": true,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-paris",
    "name": "The Paris",
    "tagline": "Beautiful 3-bedroom modular featuring open living space & factory precision",
    "sectionType": "Modular",
    "price": 202000,
    "startingEstMonthly": 1131,
    "beds": 3,
    "baths": 2,
    "sqft": 2250,
    "dimensions": "32' x 76'",
    "style": "Southern Elegance",
    "description": "Designed for warmth and hospitality! The Paris offers 3 bedrooms, 2 baths, an open kitchen layout, and energy-efficient construction.",
    "highlights": [
      "3 Bedrooms & 2 Baths",
      "Open-Concept Living & Dining Area",
      "Energy Star® Certified High-Efficiency Insulation"
    ],
    "features": [
      "Drywall Interior with Warm Paint Finish",
      "Thermal Low-E Argon Windows",
      "30-Year Architectural Shingle Roof"
    ],
    "specs": [
      {
        "label": "Roof Pitch",
        "value": "4/12 Pitch"
      },
      {
        "label": "Insulation",
        "value": "R-22 Floor / R-11 Wall / R-30 Roof"
      }
    ],
    "images": [
      "https://regentstorage.blob.core.windows.net/regent-public/c1766b09a153499c885a25059a3c37b2.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/5645d9caa0f349fb92676b4b320664c2.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/9d9e732acfec4166a8ac9d2c82125a7a.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/c6db5f3fa8b441bb9dfdd7ea5cad22ad.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/27ed2f4fcd0f41d19327d01ad1653d54.webp"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/ac67bb0cbf5a45fdae71ba3f2aa2871e.png",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": false,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-rosedale",
    "name": "The Rosedale",
    "tagline": "Beautiful 3-bedroom modular featuring open living space & factory precision",
    "sectionType": "Modular",
    "price": 218000,
    "startingEstMonthly": 1221,
    "beds": 3,
    "baths": 2,
    "sqft": 2250,
    "dimensions": "32' x 76'",
    "style": "Craftsman Haven",
    "description": "Designed for warmth and hospitality! The Rosedale offers 3 bedrooms, 2 baths, an open kitchen layout, and energy-efficient construction.",
    "highlights": [
      "3 Bedrooms & 2 Baths",
      "Open-Concept Living & Dining Area",
      "Energy Star® Certified High-Efficiency Insulation"
    ],
    "features": [
      "Drywall Interior with Warm Paint Finish",
      "Thermal Low-E Argon Windows",
      "30-Year Architectural Shingle Roof"
    ],
    "specs": [
      {
        "label": "Roof Pitch",
        "value": "4/12 Pitch"
      },
      {
        "label": "Insulation",
        "value": "R-22 Floor / R-11 Wall / R-30 Roof"
      }
    ],
    "images": [
      "https://regentstorage.blob.core.windows.net/regent-public/841f252c78e047688b28fe4c22a79ad7.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/aedb8579eba84edf9d038a9689f7516b.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/aab46bac2d0540bc8908ff5ae6ef99bc.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/27f96edf9d384452aca239b6e436ce86.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/1c1329c753cc41f585446e4cf13c1e24.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/6dad74bc49b641718bd7d3f2fa18a7e7.png",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": true,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-forest-manor-3523b",
    "name": "The Forest Manor 3523B",
    "tagline": "Beautiful 3-bedroom modular featuring open living space & factory precision",
    "sectionType": "Modular",
    "price": 228000,
    "startingEstMonthly": 1277,
    "beds": 3,
    "baths": 2,
    "sqft": 2250,
    "dimensions": "32' x 76'",
    "style": "Minimalist Lodge",
    "description": "Designed for warmth and hospitality! The Forest Manor 3523B offers 3 bedrooms, 2 baths, an open kitchen layout, and energy-efficient construction.",
    "highlights": [
      "3 Bedrooms & 2 Baths",
      "Open-Concept Living & Dining Area",
      "Energy Star® Certified High-Efficiency Insulation"
    ],
    "features": [
      "Drywall Interior with Warm Paint Finish",
      "Thermal Low-E Argon Windows",
      "30-Year Architectural Shingle Roof"
    ],
    "specs": [
      {
        "label": "Roof Pitch",
        "value": "4/12 Pitch"
      },
      {
        "label": "Insulation",
        "value": "R-22 Floor / R-11 Wall / R-30 Roof"
      }
    ],
    "images": [
      "https://regentstorage.blob.core.windows.net/regent-public/4642fbd4833d45198c3d45904c62183b.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/62f944430dad4f6b910b3d9e0bf354e9.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/8d55ab529a794851ad63025f17722264.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/089ff9daab7e40b98099741c9d2c901c.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/49b54faabd704d53977699ce35cfdef2.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/827dc44529b6421aa612d2da3e952743.png",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": true,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-creole",
    "name": "The Creole",
    "tagline": "Beautiful 3-bedroom double-wide featuring open living space & factory precision",
    "sectionType": "Double-Wide",
    "price": 146000,
    "startingEstMonthly": 818,
    "beds": 3,
    "baths": 2,
    "sqft": 1680,
    "dimensions": "28' x 64'",
    "style": "Southern Elegance",
    "description": "Designed for warmth and hospitality! The Creole offers 3 bedrooms, 2 baths, an open kitchen layout, and energy-efficient construction.",
    "highlights": [
      "3 Bedrooms & 2 Baths",
      "Open-Concept Living & Dining Area",
      "Energy Star® Certified High-Efficiency Insulation"
    ],
    "features": [
      "Drywall Interior with Warm Paint Finish",
      "Thermal Low-E Argon Windows",
      "30-Year Architectural Shingle Roof"
    ],
    "specs": [
      {
        "label": "Roof Pitch",
        "value": "4/12 Pitch"
      },
      {
        "label": "Insulation",
        "value": "R-22 Floor / R-11 Wall / R-30 Roof"
      }
    ],
    "images": [
      "https://regentstorage.blob.core.windows.net/regent-public/ccbb11ef4f554a14b0c7c6af16dc97f1.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/0cde1e04fa164fd797b8d4be3f35283b.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/56998229d7b34937b36525ff2f3e73c0.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/f060fe6b9e6d4f56bac4cda0194b61e5.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/fbc6f8a6cb304ba691d0c6ec0863d394.webp"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/da3ff46111b44868907148fff4ca7d45.png",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": false,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-dauphine",
    "name": "The Dauphine",
    "tagline": "Beautiful 3-bedroom double-wide featuring open living space & factory precision",
    "sectionType": "Double-Wide",
    "price": 149500,
    "startingEstMonthly": 837,
    "beds": 3,
    "baths": 2,
    "sqft": 1680,
    "dimensions": "28' x 64'",
    "style": "Southern Elegance",
    "description": "Designed for warmth and hospitality! The Dauphine offers 3 bedrooms, 2 baths, an open kitchen layout, and energy-efficient construction.",
    "highlights": [
      "3 Bedrooms & 2 Baths",
      "Open-Concept Living & Dining Area",
      "Energy Star® Certified High-Efficiency Insulation"
    ],
    "features": [
      "Drywall Interior with Warm Paint Finish",
      "Thermal Low-E Argon Windows",
      "30-Year Architectural Shingle Roof"
    ],
    "specs": [
      {
        "label": "Roof Pitch",
        "value": "4/12 Pitch"
      },
      {
        "label": "Insulation",
        "value": "R-22 Floor / R-11 Wall / R-30 Roof"
      }
    ],
    "images": [
      "https://regentstorage.blob.core.windows.net/regent-public/9a2433f5ad9041f881769a00e0f4edfd.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/e24ad4f3a8e44c6eaa8de1d9f35aec6e.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/6bc7532c5ddd40ba8b41309fafe70e98.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/b62f04f8f6fb4aa08ae5fcac5c44ca50.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/412f32b3c2c84920ae8d708c9b47d89b.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/e6a7815b08f543808eafab443f5cc70d.png",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": true,
    "isBestSeller": false,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-tulane",
    "name": "The Tulane",
    "tagline": "Beautiful 3-bedroom double-wide featuring open living space & factory precision",
    "sectionType": "Double-Wide",
    "price": 151000,
    "startingEstMonthly": 846,
    "beds": 3,
    "baths": 2,
    "sqft": 1680,
    "dimensions": "28' x 64'",
    "style": "Modern Farmhouse",
    "description": "Designed for warmth and hospitality! The Tulane offers 3 bedrooms, 2 baths, an open kitchen layout, and energy-efficient construction.",
    "highlights": [
      "3 Bedrooms & 2 Baths",
      "Open-Concept Living & Dining Area",
      "Energy Star® Certified High-Efficiency Insulation"
    ],
    "features": [
      "Drywall Interior with Warm Paint Finish",
      "Thermal Low-E Argon Windows",
      "30-Year Architectural Shingle Roof"
    ],
    "specs": [
      {
        "label": "Roof Pitch",
        "value": "4/12 Pitch"
      },
      {
        "label": "Insulation",
        "value": "R-22 Floor / R-11 Wall / R-30 Roof"
      }
    ],
    "images": [
      "https://regentstorage.blob.core.windows.net/regent-public/e4641d8943544f01b5ed7e758d7209dc.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/710beb507f564097a51fe886ad3e3e62.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/a3f128f402ff4817a7a439b9ba7ef905.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/36224b2a2af245c69bafd197a3098512.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/237fb56c3f004a32a89717d1158d8d32.jpeg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/ac67bb0cbf5a45fdae71ba3f2aa2871e.png",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": true,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-ascent",
    "name": "The Ascent",
    "tagline": "Beautiful 4-bedroom modular featuring open living space & factory precision",
    "sectionType": "Modular",
    "price": 195000,
    "startingEstMonthly": 1092,
    "beds": 4,
    "baths": 2,
    "sqft": 2250,
    "dimensions": "32' x 76'",
    "style": "Modern Farmhouse",
    "description": "Designed for warmth and hospitality! The Ascent offers 4 bedrooms, 2 baths, an open kitchen layout, and energy-efficient construction.",
    "highlights": [
      "4 Bedrooms & 2 Baths",
      "Open-Concept Living & Dining Area",
      "Energy Star® Certified High-Efficiency Insulation"
    ],
    "features": [
      "Drywall Interior with Warm Paint Finish",
      "Thermal Low-E Argon Windows",
      "30-Year Architectural Shingle Roof"
    ],
    "specs": [
      {
        "label": "Roof Pitch",
        "value": "4/12 Pitch"
      },
      {
        "label": "Insulation",
        "value": "R-22 Floor / R-11 Wall / R-30 Roof"
      }
    ],
    "images": [
      "https://regentstorage.blob.core.windows.net/regent-public/a7516cc1d944466a987a12001d14ed66.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/e471b0aa1f904666afb4d7fcfcd537df.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/61e2999ec2bb4553b6776967b69cdf5a.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/cc83d19c8a0143a6a1e3b568956acb84.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/04b561663ef74439a5650da341d4af34.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/ac67bb0cbf5a45fdae71ba3f2aa2871e.png",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": false,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-hudson",
    "name": "The Hudson",
    "tagline": "Beautiful 3-bedroom modular featuring open living space & factory precision",
    "sectionType": "Modular",
    "price": 208000,
    "startingEstMonthly": 1165,
    "beds": 3,
    "baths": 2,
    "sqft": 2250,
    "dimensions": "32' x 76'",
    "style": "Craftsman Haven",
    "description": "Designed for warmth and hospitality! The Hudson offers 3 bedrooms, 2 baths, an open kitchen layout, and energy-efficient construction.",
    "highlights": [
      "3 Bedrooms & 2 Baths",
      "Open-Concept Living & Dining Area",
      "Energy Star® Certified High-Efficiency Insulation"
    ],
    "features": [
      "Drywall Interior with Warm Paint Finish",
      "Thermal Low-E Argon Windows",
      "30-Year Architectural Shingle Roof"
    ],
    "specs": [
      {
        "label": "Roof Pitch",
        "value": "4/12 Pitch"
      },
      {
        "label": "Insulation",
        "value": "R-22 Floor / R-11 Wall / R-30 Roof"
      }
    ],
    "images": [
      "https://regentstorage.blob.core.windows.net/regent-public/72bd3db9ebb04af6af705d9ba6e7c2e0.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/07a66f7270a8472bb5317fb17bb5f827.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/441d4b1dd2974426976fcc4f6448db84.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/198e298a92894dd6835d8905f6e3d530.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/926c58ac5073464d9e87165b4c638a2f.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/ac67bb0cbf5a45fdae71ba3f2aa2871e.png",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": true,
    "isBestSeller": true,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-shoreline",
    "name": "The Shoreline",
    "tagline": "Beautiful 4-bedroom modular featuring open living space & factory precision",
    "sectionType": "Modular",
    "price": 212000,
    "startingEstMonthly": 1187,
    "beds": 4,
    "baths": 2,
    "sqft": 2250,
    "dimensions": "32' x 76'",
    "style": "Southern Elegance",
    "description": "Designed for warmth and hospitality! The Shoreline offers 4 bedrooms, 2 baths, an open kitchen layout, and energy-efficient construction.",
    "highlights": [
      "4 Bedrooms & 2 Baths",
      "Open-Concept Living & Dining Area",
      "Energy Star® Certified High-Efficiency Insulation"
    ],
    "features": [
      "Drywall Interior with Warm Paint Finish",
      "Thermal Low-E Argon Windows",
      "30-Year Architectural Shingle Roof"
    ],
    "specs": [
      {
        "label": "Roof Pitch",
        "value": "4/12 Pitch"
      },
      {
        "label": "Insulation",
        "value": "R-22 Floor / R-11 Wall / R-30 Roof"
      }
    ],
    "images": [
      "https://regentstorage.blob.core.windows.net/regent-public/437c6762e618452785c3cd9a2b339393.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/7d5b60e2b21a41d4b3c83d363ce136a2.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/1dde7d4307b44613b1c881b5f6131ce1.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/e9ed36c8a0734bcca3d1eda7e07e8a89.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/9c7908f814484e8b961f319cd1f92648.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/d132b8e9244441ed889076e96137c03b.png",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": false,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-bayshore",
    "name": "The Bayshore",
    "tagline": "Beautiful 2-bedroom double-wide featuring open living space & factory precision",
    "sectionType": "Double-Wide",
    "price": 133000,
    "startingEstMonthly": 745,
    "beds": 2,
    "baths": 2,
    "sqft": 1680,
    "dimensions": "28' x 64'",
    "style": "Southern Elegance",
    "description": "Designed for warmth and hospitality! The Bayshore offers 2 bedrooms, 2 baths, an open kitchen layout, and energy-efficient construction.",
    "highlights": [
      "2 Bedrooms & 2 Baths",
      "Open-Concept Living & Dining Area",
      "Energy Star® Certified High-Efficiency Insulation"
    ],
    "features": [
      "Drywall Interior with Warm Paint Finish",
      "Thermal Low-E Argon Windows",
      "30-Year Architectural Shingle Roof"
    ],
    "specs": [
      {
        "label": "Roof Pitch",
        "value": "4/12 Pitch"
      },
      {
        "label": "Insulation",
        "value": "R-22 Floor / R-11 Wall / R-30 Roof"
      }
    ],
    "images": [
      "https://regentstorage.blob.core.windows.net/regent-public/e3e7b38ae31241bb98813a4461bf5ea2.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/742812023bdc48e9a0e8bda26eb9e5d6.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/e5cc6d7a658b40bbace3c3049f61cb1f.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/5905b04fb2fb419296b5c3947806ce6d.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/e60666a23fbd4ef2a19b773e68892a3f.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/a223d040dcc2446583a4ea87a819fb7e.png",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": true,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-boulder",
    "name": "The Boulder",
    "tagline": "Beautiful 3-bedroom modular featuring open living space & factory precision",
    "sectionType": "Modular",
    "price": 199000,
    "startingEstMonthly": 1114,
    "beds": 3,
    "baths": 2,
    "sqft": 2250,
    "dimensions": "32' x 76'",
    "style": "Minimalist Lodge",
    "description": "Designed for warmth and hospitality! The Boulder offers 3 bedrooms, 2 baths, an open kitchen layout, and energy-efficient construction.",
    "highlights": [
      "3 Bedrooms & 2 Baths",
      "Open-Concept Living & Dining Area",
      "Energy Star® Certified High-Efficiency Insulation"
    ],
    "features": [
      "Drywall Interior with Warm Paint Finish",
      "Thermal Low-E Argon Windows",
      "30-Year Architectural Shingle Roof"
    ],
    "specs": [
      {
        "label": "Roof Pitch",
        "value": "4/12 Pitch"
      },
      {
        "label": "Insulation",
        "value": "R-22 Floor / R-11 Wall / R-30 Roof"
      }
    ],
    "images": [
      "https://regentstorage.blob.core.windows.net/regent-public/7234de1777174fc098d3aaf6c9560e6e.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/ce991372eaf54de6948d417904267e16.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/56e5940c4fb5432f935f2d84dffddeae.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/d83b2102bccc45c890575c17843d83ae.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/9bb2ef9859ce4a3fb2d465bb647f4824.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/da3ff46111b44868907148fff4ca7d45.png",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": false,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-montana",
    "name": "The Montana",
    "tagline": "Beautiful 3-bedroom modular featuring open living space & factory precision",
    "sectionType": "Modular",
    "price": 222000,
    "startingEstMonthly": 1243,
    "beds": 3,
    "baths": 2,
    "sqft": 2250,
    "dimensions": "32' x 76'",
    "style": "Craftsman Haven",
    "description": "Designed for warmth and hospitality! The Montana offers 3 bedrooms, 2 baths, an open kitchen layout, and energy-efficient construction.",
    "highlights": [
      "3 Bedrooms & 2 Baths",
      "Open-Concept Living & Dining Area",
      "Energy Star® Certified High-Efficiency Insulation"
    ],
    "features": [
      "Drywall Interior with Warm Paint Finish",
      "Thermal Low-E Argon Windows",
      "30-Year Architectural Shingle Roof"
    ],
    "specs": [
      {
        "label": "Roof Pitch",
        "value": "4/12 Pitch"
      },
      {
        "label": "Insulation",
        "value": "R-22 Floor / R-11 Wall / R-30 Roof"
      }
    ],
    "images": [
      "https://regentstorage.blob.core.windows.net/regent-public/810cb298e5c6412b907065878e9f0e14.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/cbf09c3b3b374113aa2ebc2ec5e225b6.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/ed3e0758f47540e18793c1b1ca85fc2b.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/938015ec822e4577ae8e4de0615ccd82.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/20298c2c9ec84a0b8617de944c489b62.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/ad8c7fec9cbc4d37bab98f2ff7d31bf4.png",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": true,
    "isBestSeller": false,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-ashbank",
    "name": "The Ashbank",
    "tagline": "Beautiful 3-bedroom double-wide featuring open living space & factory precision",
    "sectionType": "Double-Wide",
    "price": 139500,
    "startingEstMonthly": 781,
    "beds": 3,
    "baths": 2,
    "sqft": 1680,
    "dimensions": "28' x 64'",
    "style": "Modern Farmhouse",
    "description": "Designed for warmth and hospitality! The Ashbank offers 3 bedrooms, 2 baths, an open kitchen layout, and energy-efficient construction.",
    "highlights": [
      "3 Bedrooms & 2 Baths",
      "Open-Concept Living & Dining Area",
      "Energy Star® Certified High-Efficiency Insulation"
    ],
    "features": [
      "Drywall Interior with Warm Paint Finish",
      "Thermal Low-E Argon Windows",
      "30-Year Architectural Shingle Roof"
    ],
    "specs": [
      {
        "label": "Roof Pitch",
        "value": "4/12 Pitch"
      },
      {
        "label": "Insulation",
        "value": "R-22 Floor / R-11 Wall / R-30 Roof"
      }
    ],
    "images": [
      "https://regentstorage.blob.core.windows.net/regent-public/9eb593cad86f4e459f05537d0e71a502.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/cf065cf7ea9f4493a7970a611a50c99d.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/776ff76095e645f5bb2a31bc255b6c13.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/45852d2b74454e3e831ac697f188b65e.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/8934aca2e3494016afd2e825338eb271.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/a7627747268a43578b30ea998e7214da.png",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": true,
    "isBestSeller": false,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-sanibel",
    "name": "The Sanibel",
    "tagline": "Beautiful 2-bedroom double-wide featuring open living space & factory precision",
    "sectionType": "Double-Wide",
    "price": 147000,
    "startingEstMonthly": 823,
    "beds": 2,
    "baths": 2,
    "sqft": 1680,
    "dimensions": "28' x 64'",
    "style": "Southern Elegance",
    "description": "Designed for warmth and hospitality! The Sanibel offers 2 bedrooms, 2 baths, an open kitchen layout, and energy-efficient construction.",
    "highlights": [
      "2 Bedrooms & 2 Baths",
      "Open-Concept Living & Dining Area",
      "Energy Star® Certified High-Efficiency Insulation"
    ],
    "features": [
      "Drywall Interior with Warm Paint Finish",
      "Thermal Low-E Argon Windows",
      "30-Year Architectural Shingle Roof"
    ],
    "specs": [
      {
        "label": "Roof Pitch",
        "value": "4/12 Pitch"
      },
      {
        "label": "Insulation",
        "value": "R-22 Floor / R-11 Wall / R-30 Roof"
      }
    ],
    "images": [
      "https://regentstorage.blob.core.windows.net/regent-public/a95cd555fad34f8a8267e1003b68cf3e.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/0da304c068fe45bbbb7940462cb240fc.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/e5a964d53a2d4f06b4991a633c803f3f.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/93edac846705487588e9d8edf23d13b5.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/cb0bb78bbc564a6582a49c158edf88d4.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/ea1c30de65174f9ba653ced4f2243081.png",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": false,
    "isTurnkeyReady": true,
    "customizations": []
  }
];

export const RETAILER_STORES: RetailerStore[] = [
  {
    "id": "store-1",
    "name": "Regional Homes of Byram",
    "address": "5551 I 55 South",
    "city": "Byram",
    "state": "MS",
    "zip": "39272",
    "phone": "(601) 373-4453",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 5,
    "reviewsCount": 159,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "DeerValley",
      "Hamilton",
      "Winston",
      "Champion|Leesville"
    ],
    "lat": 32.1812,
    "lng": -90.2662
  },
  {
    "id": "store-3",
    "name": "Regional Homes of Gulfport",
    "address": "15489 Hwy 49 S",
    "city": "Gulfport",
    "state": "MS",
    "zip": "39503",
    "phone": "(228) 832-0710",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 4.8,
    "reviewsCount": 153,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "DeerValley",
      "Hamilton",
      "Winston",
      "Champion|Leesville"
    ],
    "lat": 30.3874,
    "lng": -89.0728
  },
  {
    "id": "store-4",
    "name": "Regional Outlet Center -  Hattiesburg",
    "address": "7756 US Hwy 49 North",
    "city": "Hattiesburg",
    "state": "MS",
    "zip": "39402",
    "phone": "(601) 261-6005",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 4.9,
    "reviewsCount": 131,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "Champion|Leesville",
      "Hamilton | Xpress",
      "Bravo Homebuilders",
      "Embark Homebuilders"
    ],
    "lat": 31.3671,
    "lng": -89.2503
  },
  {
    "id": "store-5",
    "name": "Regional Homes of Pearl",
    "address": "2845 Hwy 80",
    "city": "Pearl",
    "state": "MS",
    "zip": "39208",
    "phone": "(601) 939-1459",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 4.7,
    "reviewsCount": 108,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "Champion|Dresden",
      "Franklin",
      "Champion|Benton",
      "Hamilton"
    ],
    "lat": 32.2743,
    "lng": -90.0734
  },
  {
    "id": "store-6",
    "name": "Regional Homes of Hattiesburg",
    "address": "7385 US 49 North",
    "city": "Hattiesburg",
    "state": "MS",
    "zip": "39402",
    "phone": "(601) 296-7960",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 4.9,
    "reviewsCount": 120,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "Champion|Benton",
      "Hamilton",
      "Winston",
      "Champion|Leesville"
    ],
    "lat": 31.3471,
    "lng": -89.2903
  },
  {
    "id": "store-18",
    "name": "Tupelo Home Center",
    "address": "2401 Gloster Street",
    "city": "Tupelo",
    "state": "MS",
    "zip": "38801",
    "phone": "(662) 432-1091",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 4.8,
    "reviewsCount": 124,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "Champion|Dresden",
      "DeerValley",
      "Kabco",
      "Clayton|Southern Energy"
    ],
    "lat": 34.2976,
    "lng": -88.6834
  },
  {
    "id": "store-19",
    "name": "Regional Homes of Pontotoc",
    "address": "2753 Hwy 15 North",
    "city": "Pontotoc",
    "state": "MS",
    "zip": "38863",
    "phone": "(662) 488-9033",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 5,
    "reviewsCount": 107,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "Franklin",
      "Kabco",
      "Clayton|Southern Energy",
      "Clayton|TruMH"
    ],
    "lat": 34.2479,
    "lng": -88.9665
  },
  {
    "id": "store-60",
    "name": "Regional Homes of Columbus",
    "address": "7120 Highway 45 North",
    "city": "Columbus",
    "state": "MS",
    "zip": "39705",
    "phone": "(662) 570-1375",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 4.9,
    "reviewsCount": 81,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "Champion|Dresden",
      "Kabco",
      "Clayton|Southern Energy",
      "Clayton|TruMH"
    ],
    "lat": 33.5157,
    "lng": -88.3673
  },
  {
    "id": "store-75",
    "name": "Regional Homes of McComb",
    "address": "621 W Presley Blvd",
    "city": "McComb",
    "state": "MS",
    "zip": "39648",
    "phone": "(601) 249-4270",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 5,
    "reviewsCount": 45,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "Champion|Dresden",
      "DeerValley",
      "Skyline Builders LLC",
      "Winston"
    ],
    "lat": 31.2838,
    "lng": -90.4531
  },
  {
    "id": "store-80",
    "name": "Town & Country Homes of Tupelo",
    "address": "1110 D L Collums Drive",
    "city": "Tupelo",
    "state": "MS",
    "zip": "38801",
    "phone": "(662) 690-1501",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 4.9,
    "reviewsCount": 78,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "Franklin",
      "Kabco",
      "Clayton|Southern Energy",
      "Clayton|TruMH"
    ],
    "lat": 34.2576,
    "lng": -88.6834
  },
  {
    "id": "store-114",
    "name": "Regional Homes of Laurel",
    "address": "5185 US-84",
    "city": "Laurel",
    "state": "MS",
    "zip": "39443",
    "phone": "(601) 428-8218",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 4.8,
    "reviewsCount": 71,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "DeerValley",
      "Skyline Builders LLC",
      "Hamilton",
      "Winston"
    ],
    "lat": 31.7141,
    "lng": -89.0906
  },
  {
    "id": "store-116",
    "name": "Regional Homes of Meridian",
    "address": "2701 South Frontage Road",
    "city": "Meridian",
    "state": "MS",
    "zip": "39301",
    "phone": "(601) 693-6789",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 4.8,
    "reviewsCount": 125,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "Clayton|TruMH",
      "Hamilton",
      "Winston",
      "Champion|Leesville"
    ],
    "lat": 32.4043,
    "lng": -88.6437
  },
  {
    "id": "store-117",
    "name": "Town & Country Homes of Meridian",
    "address": "2500 North Frontage Road",
    "city": "Meridian",
    "state": "MS",
    "zip": "39301",
    "phone": "(601) 693-0197",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 4.8,
    "reviewsCount": 72,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "Champion|Dresden",
      "Clayton|TruMH",
      "Hamilton",
      "Winston"
    ],
    "lat": 32.3643,
    "lng": -88.7037
  },
  {
    "id": "store-118",
    "name": "Regional Homes of Mobile",
    "address": "7251 Moffett Road",
    "city": "Mobile",
    "state": "AL",
    "zip": "36618",
    "phone": "(251) 649-2077",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 4.7,
    "reviewsCount": 143,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "Franklin",
      "Hamilton",
      "Winston",
      "Hamilton | Xpress"
    ],
    "lat": 30.7154,
    "lng": -88.0199
  },
  {
    "id": "store-124",
    "name": "Repo Home Center of Tupelo",
    "address": "2500 South Gloster Street",
    "city": "Tupelo",
    "state": "MS",
    "zip": "38801",
    "phone": "(662) 432-2942",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 4.7,
    "reviewsCount": 134,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "Kabco",
      "Clayton|Southern Energy",
      "Clayton|TruMH",
      "Lexington"
    ],
    "lat": 34.2976,
    "lng": -88.6634
  },
  {
    "id": "store-137",
    "name": "Regional Homes of Hammond",
    "address": "15008 Montecino Drive",
    "city": "Hammond",
    "state": "LA",
    "zip": "70403",
    "phone": "(985) 956-7100",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 4.7,
    "reviewsCount": 57,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "Hamilton",
      "Winston",
      "Hamilton | Xpress",
      "Bravo Homebuilders"
    ],
    "lat": 30.98,
    "lng": -91.9
  },
  {
    "id": "store-138",
    "name": "Town and Country of Hammond",
    "address": "41539 W I-55 Service Road",
    "city": "Hammond",
    "state": "LA",
    "zip": "70403",
    "phone": "(985) 542-8020",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 4.8,
    "reviewsCount": 106,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "Hamilton",
      "Winston",
      "Champion|Leesville",
      "Hamilton | Xpress"
    ],
    "lat": 31,
    "lng": -91.96
  },
  {
    "id": "store-140",
    "name": "Regional Homes of Bonifay",
    "address": "409 Saint John's Road",
    "city": "Bonifay",
    "state": "FL",
    "zip": "32425",
    "phone": "(850) 547-6250",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 5,
    "reviewsCount": 132,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "DeerValley",
      "Hamilton",
      "Winston",
      "Champion|Leesville"
    ],
    "lat": 27.7,
    "lng": -81.49
  },
  {
    "id": "store-147",
    "name": "Town and Country Homes of Hattiesburg",
    "address": "7495 US Hwy 49 South",
    "city": "Hattiesburg",
    "state": "MS",
    "zip": "39402",
    "phone": "(601) 602-2378",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 4.9,
    "reviewsCount": 123,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "Champion|Dresden",
      "Hamilton",
      "Winston",
      "Champion|Leesville"
    ],
    "lat": 31.3271,
    "lng": -89.2503
  },
  {
    "id": "store-159",
    "name": "Regional Homes | Como",
    "address": "16394 Hwy 310",
    "city": "Como",
    "state": "MS",
    "zip": "38619",
    "phone": "(662) 460-4663",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 4.9,
    "reviewsCount": 68,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "Champion|Dresden",
      "Kabco",
      "Clayton|Southern Energy",
      "Clayton|TruMH"
    ],
    "lat": 32.37,
    "lng": -89.34
  },
  {
    "id": "store-166",
    "name": "Regional Homes of Cullman",
    "address": "660 Co Rd 437",
    "city": "Cullman",
    "state": "AL",
    "zip": "35055",
    "phone": "(256) 775-8794",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 5,
    "reviewsCount": 148,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "Franklin",
      "Clayton|TruMH",
      "Hamilton",
      "Winston"
    ],
    "lat": 34.2148,
    "lng": -86.8436
  },
  {
    "id": "store-174",
    "name": "Regional Homes of Northport",
    "address": "5900 McFarland Blvd",
    "city": "Northport",
    "state": "AL",
    "zip": "35476",
    "phone": "(205) 248-2178",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 4.8,
    "reviewsCount": 131,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "Franklin",
      "Hamilton",
      "Winston",
      "Hamilton | Xpress"
    ],
    "lat": 32.8,
    "lng": -86.78
  },
  {
    "id": "store-177",
    "name": "Regional Homes of Brunswick",
    "address": "867 Tucker Road SE",
    "city": "Bolivia",
    "state": "NC",
    "zip": "28422",
    "phone": "(910) 754-4900",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 4.8,
    "reviewsCount": 140,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "Hamilton",
      "Winston",
      "Champion|Ocala",
      "Champion|Lillington"
    ],
    "lat": 35.77,
    "lng": -78.97
  },
  {
    "id": "store-181",
    "name": "Regional Homes of Monroe",
    "address": "3500 US-165 Bypass South",
    "city": "Monroe",
    "state": "LA",
    "zip": "71202",
    "phone": "(318) 323-4484",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 5,
    "reviewsCount": 135,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "Hamilton",
      "Winston",
      "Champion|Leesville",
      "Champion|Ocala"
    ],
    "lat": 31.02,
    "lng": -91.9
  },
  {
    "id": "store-182",
    "name": "Regional Homes of Alexandria",
    "address": "8045 Hwy 28 West",
    "city": "Alexandria",
    "state": "LA",
    "zip": "71303",
    "phone": "(318) 487-8828",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 4.9,
    "reviewsCount": 108,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "Winston",
      "Champion|Leesville",
      "Hamilton | Xpress",
      "Champion|Navasota"
    ],
    "lat": 30.98,
    "lng": -91.96
  },
  {
    "id": "store-183",
    "name": "Regional Homes of Bossier City",
    "address": "3500 E Texas St",
    "city": "Bossier City",
    "state": "LA",
    "zip": "71111",
    "phone": "(318) 741-3729",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 5,
    "reviewsCount": 49,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "Champion|Dresden",
      "Winston",
      "Champion|Leesville",
      "Hamilton | Xpress"
    ],
    "lat": 31,
    "lng": -91.94
  },
  {
    "id": "store-193",
    "name": "Gum Tree Homes",
    "address": "1503 S Gloster St",
    "city": "Tupelo",
    "state": "MS",
    "zip": "38801",
    "phone": "(662) 842-1024",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 4.9,
    "reviewsCount": 150,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "Winston",
      "Hamilton | Xpress",
      "Bravo Homebuilders",
      "Embark Homebuilders"
    ],
    "lat": 34.2976,
    "lng": -88.6634
  },
  {
    "id": "store-194",
    "name": "Regional Homes of Saltillo",
    "address": "1583 US-45",
    "city": "Saltillo",
    "state": "MS",
    "zip": "38866",
    "phone": "(662) 680-6235",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 5,
    "reviewsCount": 72,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "Champion|Dresden",
      "Franklin",
      "Champion|Benton",
      "Hamilton"
    ],
    "lat": 32.35,
    "lng": -89.34
  },
  {
    "id": "store-210",
    "name": "Regional Homes of Florence",
    "address": "2213 E Palmetto Street",
    "city": "Florence",
    "state": "SC",
    "zip": "29506",
    "phone": "(843) 413-0440",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 4.8,
    "reviewsCount": 71,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "Franklin",
      "Hamilton",
      "Winston",
      "Hamilton | Xpress"
    ],
    "lat": 34.2154,
    "lng": -79.7626
  },
  {
    "id": "store-211",
    "name": "Town & Country Homes of Hartsville",
    "address": "428 W Bobo Newsom Highway",
    "city": "Hartsville",
    "state": "SC",
    "zip": "29550",
    "phone": "(843) 917-0237",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 4.7,
    "reviewsCount": 49,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "Winston",
      "Hamilton | Xpress",
      "Champion|Lake City",
      "Champion|Lillington"
    ],
    "lat": 33.87,
    "lng": -81.14
  },
  {
    "id": "store-222",
    "name": "Regional Homes of Dothan",
    "address": "2439 Ross Clark Circle",
    "city": "Dothan",
    "state": "AL",
    "zip": "36301",
    "phone": "(334) 673-5600",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 4.7,
    "reviewsCount": 90,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "Franklin",
      "ScotBilt",
      "Champion|Benton",
      "Hamilton"
    ],
    "lat": 31.2232,
    "lng": -85.3505
  },
  {
    "id": "store-224",
    "name": "Regional Homes of Raceland",
    "address": "1608 US-90",
    "city": "Raceland",
    "state": "LA",
    "zip": "70394",
    "phone": "(985) 537-8467",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 4.9,
    "reviewsCount": 117,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "Hamilton",
      "Winston",
      "Champion|Leesville",
      "Hamilton | Xpress"
    ],
    "lat": 31,
    "lng": -91.9
  },
  {
    "id": "store-234",
    "name": "Regional Homes of Jasper",
    "address": "12703 Hwy 78",
    "city": "Jasper",
    "state": "AL",
    "zip": "35501",
    "phone": "(205) 265-2957",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 5,
    "reviewsCount": 149,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "Champion|Dresden",
      "Hamilton",
      "Winston",
      "Hamilton | Xpress"
    ],
    "lat": 32.84,
    "lng": -86.8
  },
  {
    "id": "store-247",
    "name": "Regional Homes of Lufkin",
    "address": "803 N Medford Drive",
    "city": "Lufkin",
    "state": "TX",
    "zip": "75901",
    "phone": "(936) 899-6256",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 4.9,
    "reviewsCount": 116,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "Franklin",
      "Winston",
      "Champion|Leesville",
      "Champion|Burleson"
    ],
    "lat": 31.96,
    "lng": -99.88
  },
  {
    "id": "store-249",
    "name": "Regional Homes of Lafayette",
    "address": "2815 NW Evangeline Thruway",
    "city": "Lafayette",
    "state": "LA",
    "zip": "70507",
    "phone": "(337) 366-6631",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 4.8,
    "reviewsCount": 71,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "Champion|Dresden",
      "DeerValley",
      "Hamilton",
      "Winston"
    ],
    "lat": 30.2441,
    "lng": -91.9798
  },
  {
    "id": "store-260",
    "name": "Regional Homes of Lumberton",
    "address": "3400 E Elizabethtown Road",
    "city": "Lumberton",
    "state": "NC",
    "zip": "28358",
    "phone": "(910) 827-8274",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 4.9,
    "reviewsCount": 160,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "Franklin",
      "ScotBilt",
      "Winston",
      "Hamilton | Xpress"
    ],
    "lat": 35.79,
    "lng": -78.95
  },
  {
    "id": "store-264",
    "name": "Regional Homes of Piedmont",
    "address": "3134 Hwy 153",
    "city": "Piedmont",
    "state": "SC",
    "zip": "29673",
    "phone": "(864) 781-0181",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 4.9,
    "reviewsCount": 94,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "Champion|Dresden",
      "Franklin",
      "ScotBilt",
      "Hamilton"
    ],
    "lat": 33.83,
    "lng": -81.16
  },
  {
    "id": "store-311",
    "name": "Regional Modulars of Lumberton",
    "address": "307 N. Roberts Avenue",
    "city": "Lumberton",
    "state": "NC",
    "zip": "28358",
    "phone": "(910) 827-8270",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 4.8,
    "reviewsCount": 130,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "Franklin",
      "Hamilton",
      "Winston",
      "Champion|Lillington"
    ],
    "lat": 35.77,
    "lng": -78.99
  },
  {
    "id": "store-422",
    "name": "Regional Homes of Conway",
    "address": "767 US-501",
    "city": "Conway",
    "state": "SC",
    "zip": "29526",
    "phone": "(843) 438-9400",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 4.8,
    "reviewsCount": 127,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "Franklin",
      "Clayton|Patriot - SE Homes/CMH",
      "ScotBilt",
      "Winston"
    ],
    "lat": 33.87,
    "lng": -81.12
  },
  {
    "id": "store-460",
    "name": "Regional Homes of Robertsdale",
    "address": "24440 State Highway 59",
    "city": "Robertsdale",
    "state": "AL",
    "zip": "36567",
    "phone": "(251) 383-2363",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 4.8,
    "reviewsCount": 128,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "Franklin",
      "Hamilton",
      "Winston",
      "Hamilton | Xpress"
    ],
    "lat": 32.8,
    "lng": -86.74
  },
  {
    "id": "store-462",
    "name": "Regional Homes of Waco",
    "address": "4700 I-35 N Frontage Rd.",
    "city": "Lacy Lakeview",
    "state": "TX",
    "zip": "76705",
    "phone": "(254) 602-4062",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 4.7,
    "reviewsCount": 53,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "Winston",
      "Champion|Leesville",
      "Hamilton | Xpress",
      "Champion|Mansfield"
    ],
    "lat": 31.98,
    "lng": -99.9
  },
  {
    "id": "store-514",
    "name": "Champion Homes Center Factory Direct",
    "address": "2447 Military Street South",
    "city": "Hamilton",
    "state": "AL",
    "zip": "35570",
    "phone": "(205) 498-1858",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 5,
    "reviewsCount": 151,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "Hamilton"
    ],
    "lat": 32.84,
    "lng": -86.78
  },
  {
    "id": "store-516",
    "name": "Regional Homes of Caddo Mills",
    "address": "4369 FM 36 South",
    "city": "Caddo Mills",
    "state": "TX",
    "zip": "75135",
    "phone": "(903) 527-0100",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 4.8,
    "reviewsCount": 107,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "Winston",
      "Champion|Leesville",
      "Champion|Burleson",
      "Champion|Athens"
    ],
    "lat": 31.96,
    "lng": -99.86
  },
  {
    "id": "store-519",
    "name": "Regional Homes of Ocala",
    "address": "5325 S Pine Ave",
    "city": "Ocala",
    "state": "FL",
    "zip": "34480",
    "phone": "(352) 622-9910",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 4.8,
    "reviewsCount": 48,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "ScotBilt",
      "Champion|Millen",
      "Champion|Waycross"
    ],
    "lat": 29.2072,
    "lng": -82.0801
  },
  {
    "id": "store-463",
    "name": "Regional Homes of Bartow",
    "address": "3900 Hwy 17",
    "city": "Bartow",
    "state": "FL",
    "zip": "33830",
    "phone": "(863) 578-3791",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 4.9,
    "reviewsCount": 160,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "ScotBilt",
      "Skyline Builders LLC",
      "Winston",
      "Champion|Ocala"
    ],
    "lat": 27.7,
    "lng": -81.51
  },
  {
    "id": "store-464",
    "name": "Regional Homes - Candler",
    "address": "1759 Smokey Park Hwy",
    "city": "Candler",
    "state": "NC",
    "zip": "28751",
    "phone": "(828) 237-3190",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 4.9,
    "reviewsCount": 91,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "Champion|Benton",
      "Winston",
      "Hamilton | Xpress",
      "Champion|Millen"
    ],
    "lat": 35.75,
    "lng": -78.99
  },
  {
    "id": "store-465",
    "name": "Regional Homes of Opelousas",
    "address": "14704 U.S. Hwy 190",
    "city": "Opelousas",
    "state": "LA",
    "zip": "70570",
    "phone": "(337) 942-9036",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 4.9,
    "reviewsCount": 123,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "Hamilton",
      "Winston",
      "Champion|Leesville",
      "Hamilton | Xpress"
    ],
    "lat": 30.5535,
    "lng": -92.0415
  },
  {
    "id": "store-466",
    "name": "Regional Homes of Panama City",
    "address": "2510 E 15th St",
    "city": "Panama City",
    "state": "FL",
    "zip": "32405",
    "phone": "(850) 769-5556",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 4.8,
    "reviewsCount": 52,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "DeerValley",
      "Franklin",
      "ScotBilt",
      "Hamilton"
    ],
    "lat": 30.1988,
    "lng": -85.6002
  },
  {
    "id": "store-467",
    "name": "Regional Homes of Zephyrhills",
    "address": "34851 FL-54",
    "city": "Zephyrhills",
    "state": "FL",
    "zip": "33541",
    "phone": "(813) 815-1580",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 4.9,
    "reviewsCount": 161,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "Skyline Builders LLC",
      "Hamilton",
      "Winston",
      "Champion|Ocala"
    ],
    "lat": 27.66,
    "lng": -81.51
  },
  {
    "id": "store-468",
    "name": "Champion Homes Center of Supply",
    "address": "411 Ocean Hwy W",
    "city": "Supply",
    "state": "NC",
    "zip": "28462",
    "phone": "(910) 312-2530",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 4.8,
    "reviewsCount": 162,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "Winston",
      "Champion|Lillington",
      "Champion|Laurinburg",
      "Champion|Pembroke"
    ],
    "lat": 35.77,
    "lng": -78.99
  },
  {
    "id": "store-485",
    "name": "Champion Homes Center - Lillington",
    "address": "115 Titan Roberts Rd",
    "city": "Lillington",
    "state": "NC",
    "zip": "27546",
    "phone": "(180) 050-45924",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 4.8,
    "reviewsCount": 137,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "Champion|Lillington",
      "Champion|Laurinburg",
      "Champion|Pembroke"
    ],
    "lat": 35.4385,
    "lng": -78.7742
  },
  {
    "id": "store-490",
    "name": "Champion Homes Center - Topeka",
    "address": "6855 S 700 W",
    "city": "Topeka",
    "state": "IN",
    "zip": "46571",
    "phone": "(180) 054-37412",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 4.9,
    "reviewsCount": 79,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "Champion|Topeka"
    ],
    "lat": 39.76,
    "lng": -86.09
  },
  {
    "id": "store-525",
    "name": "Regional Homes of Minot",
    "address": "1710 20th Ave. SW",
    "city": "Minot",
    "state": "ND",
    "zip": "58701",
    "phone": "(701) 839-0039",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 4.9,
    "reviewsCount": 133,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "Adventure",
      "Champion|Topeka",
      "Champion | Worthington"
    ],
    "lat": 48.253,
    "lng": -101.2923
  },
  {
    "id": "store-526",
    "name": "Regional Homes of Kearney",
    "address": "2000 E. Highway 30",
    "city": "Kearney",
    "state": "NE",
    "zip": "68848",
    "phone": "(308) 237-3843",
    "hours": "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM",
    "rating": 4.9,
    "reviewsCount": 101,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "modelsOnDisplay": [
      "Champion|Topeka",
      "Champion|Decatur",
      "Champion | Arkansas City",
      "Clayton | Middlebury"
    ],
    "lat": 41.53,
    "lng": -99.88
  }
];

export const RESOURCE_ARTICLES: ResourceArticle[] = [
  {
    id: 'land-prep-checklist',
    title: 'The Ultimate Land Preparation Checklist for Manufactured Homes',
    category: 'Land Prep',
    readTime: '6 min read',
    date: 'March 14, 2025',
    summary: 'Everything you need to know about soil grading, utility hookups, driveway access, and local zoning permits before your home delivery day.',
    content: 'Preparing your land is one of the most exciting steps in your homebuyer journey. A properly cleared and leveled site ensures your manufactured or modular home sits perfectly stable for decades to come...',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    author: 'Sarah Jenkins, Director of Site Development'
  },
  {
    id: 'first-time-buyer-guide',
    title: 'First-Time Homebuyer Guide: Single-Wide vs. Double-Wide vs. Modular',
    category: 'Buyer Guide',
    readTime: '8 min read',
    date: 'February 28, 2025',
    summary: 'Demystifying section types, floor plans, building codes, and price points so you can confidently pick the right fit for your family.',
    content: 'Navigating the choices between manufactured and modular homes can feel overwhelming at first. Here is a clear breakdown of structural differences, financing options, and long-term resale value...',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    author: 'David Vance, Senior Housing Specialist'
  },
  {
    id: 'cozy-decor-ideas',
    title: '5 Cozy Decor Ideas to Make Your Open-Concept Home Feel Warm & Inviting',
    category: 'Design & Decor',
    readTime: '5 min read',
    date: 'February 10, 2025',
    summary: 'Simple styling tips using natural timber tones, layered textiles, warm ambient lighting, and indoor greenery.',
    content: 'Open-concept living rooms are wonderful for family gatherings! Enhance that warm, cozy feel with layered rugs, dimmable warm LED fixtures, and rustic accent tables...',
    image: 'https://regentstorage.blob.core.windows.net/regent-public/ca1d2a25ba3d403f99266b86f32457eb.jpg',
    author: 'Elena Rostova, Lead Interior Designer'
  },
  {
    id: 'financing-options-demystified',
    title: 'Understanding Chattel Loans, Land-Home Packages & FHA Financing',
    category: 'Financing',
    readTime: '7 min read',
    date: 'January 18, 2025',
    summary: 'Discover low down payment mortgage programs, land roll-in options, and trade-in credits available for manufactured homes.',
    content: 'Securing financing for your new pre-made home is straightforward when you partner with specialized lenders. Learn about chattel home-only loans versus land-home mortgage bundling...',
    image: 'https://regentstorage.blob.core.windows.net/regent-public/feed95dfe0194eb9ba2006d1e4e938a1.jpg',
    author: 'Marcus Sterling, Mortgage Advisor'
  }
];

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    author: 'The Miller Family',
    location: 'Hattiesburg, MS',
    rating: 5,
    date: 'January 2025',
    homeModelBought: 'The Basecamp Lodge',
    quote: 'From the moment we stepped into the showroom, Hearth & Haven felt like family. Our Basecamp Lodge is so cozy and warm!',
    story: 'We were nervous about buying our first home, but the team walked us through land prep, financing, and customization. The kitchen island and wrap-around porch are our favorite places to start the morning with coffee.',
    photo: 'https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&w=600&q=80',
    verifiedBuyer: true
  },
  {
    id: 'rev-2',
    author: 'Robert & Clara Thorne',
    location: 'Cullman, AL',
    rating: 5,
    date: 'December 2024',
    homeModelBought: 'The Woodside',
    quote: 'The craftsmanship is unbelievable. The stone fireplace and dual master suites exceeded all our expectations.',
    story: 'We built on 10 acres of woodland. The energy efficiency is incredible—our power bills this winter were lower than our previous small apartment!',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    verifiedBuyer: true
  },
  {
    id: 'rev-3',
    author: 'Amanda & Caleb Jackson',
    location: 'Savannah, GA',
    rating: 5,
    date: 'February 2025',
    homeModelBought: 'The Marsh Ridge Coastal',
    quote: 'Turnkey delivery in 4 weeks! Smooth, stress-free, and delightfully affordable.',
    story: 'We traded in our 2012 single-wide and received a fantastic trade-in allowance toward The Marsh Ridge. Our kids love their new bedrooms!',
    photo: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    verifiedBuyer: true
  }
];
