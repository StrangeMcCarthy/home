import { HomeModel, RetailerStore, ResourceArticle, CustomerReview } from '../types/home';

export const INITIAL_HOMES: HomeModel[] = [
  {
    "id": "the-basecamp-lodge",
    "name": "The Basecamp Lodge",
    "tagline": "Spacious 2-bedroom, 3-bath double-wide featuring 1,650 sq ft of open living space",
    "sectionType": "Double-Wide",
    "price": 138900,
    "startingEstMonthly": 778,
    "beds": 2,
    "baths": 3,
    "sqft": 1650,
    "dimensions": "32' x 80'",
    "style": "Modern Farmhouse",
    "description": "The The Basecamp Lodge is a precision factory-built double-wide offering 2 bedrooms, 3 bathrooms, and 1,650 sq ft of climate-controlled luxury (32' x 80'). Designed with an open kitchen island, vaulted ceilings, and high-efficiency Energy Star insulation.",
    "highlights": [
      "2 Bedrooms & 3 Bathrooms (1,650 sq ft)",
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
      "https://regentstorage.blob.core.windows.net/regent-public/7a27258166524c8a9e865ebdb17aab1f.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/91d2a5fbe91e4a3ba9e78e098a628ee2.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/ca1d2a25ba3d403f99266b86f32457eb.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/371c251ec8e74656ac1e244165d3142e.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/6c087b8d133c49ef8c6de7d6c316ba1f.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/a2bd08c5538e4724a1a5f95830ebca76.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/c294f723bf2545d387a1820f53378573.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/9928821bbfdc4937a2987918647efd7e.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/dd2564d031634dafb8fa517f5e98ebf5.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/60d6d60ef2f3410291eb05f713645109.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/a1a5d12da2984796bd11e89ceb834eda.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/8befc8ea111443c697471a114f77612f.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/14552ed205794b9c922bffaa81881fb7.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/43d8f51ec84745429ff365582e118604.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/bcb8a64eab934275955b62575405845b.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/23bb91f08c7c45c9b365fa936a355b3c.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/255eeb4feedb4ee38ee3ae7f7bfd11db.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/853ef452b4f643cc91977ffbf467e1cb.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/2edadc3190154ac997c979f5f4a35669.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/f50955ae850a45c5ac9c268b67869c31.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/7d362fac794a4d288ae0291168be1b42.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/836c97f0b0414949aec007fa5d7371bb.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/a1357c44687e4bd5a810e824f0a3bce6.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/c69f640fea5f40658b944b2401e9fb38.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/ef08e7d0b64a4a72b537558d40860c67.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/eaebf2ec1fd84f36b4c9aa5b11d81e5c.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/4196b9e83b6c4900a0842cf241c5e4a3.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/4199dd1178214e54b2a364c9b7e453d8.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/98b90a763d224600888a0d8fd1735ad7.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/e7b5a31247504651bfbaf321c5e86122.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/407e1c2f63f64954b45f01bab5ff6099.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/dc7dc18f830143c8aa3a7ebf4c891f60.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/2e345bbad4f141638198ee9d12d5269a.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/5ff56fd88ce948e48d18603f87745788.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/418c2d13a2d54d06bb18b38961e72173.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/37bf6a2f8d464a96b4712d48971386d1.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/57b5e51262384e1897cc2e23de03d169.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/ad9b2b4809a54b9e82c20e1c81f2c4db.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/5c6bf0b464b546a1bf85fcc5ccf85ebf.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/9bcf35ed9edc45ffb75a0750f08fd58e.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/050745499b264461bbde6b49b54125fd.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/971acb5841c340e39722c1d0fcf09497.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/2c7d845662e043ad88d2a1f43ee3beb4.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/56b30424853440dcbf3280deec2d76c5.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/c90b308ad3704273b1fed9f03749057c.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/ad14ec8f77b948378c9ec045e0226a10.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/fa42b17124d94171b5f86b102f156f51.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/85455c75c85b4053bccf1c284fcb1c1f.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/20e0f5b89c734380aeddfcc6e4a28a46.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/d82543e7b21c41a5884567a8291e4dc6.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/0b7dcac05aa745898e3970371e72dc05.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/021f0fdb9d524b50abf7ecc9a752f422.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/1ec9edfc69fc420d85e556d1b65cc5b5.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/d3c515317cd7410f9f183d4c609566b0.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/bbedbd0437944852bde92560f447c433.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/266ebd189a7b41dda3c9a2e83c0b0ec4.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/94d2fe1ce34344caa3ceb330538e6869.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/9e25410a8f97476a846c9cb1c0281868.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/2fe82a46591940e381c7b4ca12867b1a.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/ffabeea2e4af4b1ca9f39a3dd229f39d.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/2d46ee6805e84886980343d66856c711.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/4995e56d0fd64a6aa9b7af8a9d793991.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/99977cfc9d3642d090b12f5864d1c9c5.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/771f6df0aaf54fe0b5b848b8a6abec87.pdf",
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
    "tagline": "Spacious 4-bedroom, 3-bath modular featuring 2,200 sq ft of open living space",
    "sectionType": "Modular",
    "price": 189500,
    "startingEstMonthly": 1061,
    "beds": 4,
    "baths": 3,
    "sqft": 2200,
    "dimensions": "45' x 66'",
    "style": "Craftsman Haven",
    "description": "The The Woodside is a precision factory-built modular offering 4 bedrooms, 3 bathrooms, and 2,200 sq ft of climate-controlled luxury (45' x 66'). Designed with an open kitchen island, vaulted ceilings, and high-efficiency Energy Star insulation.",
    "highlights": [
      "4 Bedrooms & 3 Bathrooms (2,200 sq ft)",
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
      "https://regentstorage.blob.core.windows.net/regent-public/14307f4691ec4e368be237e14a471072.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/a7dc94b8e7b942df89f196d2a0049882.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/0ae7b30b44624743b0630d9ec2107269.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/5e0f29a86f3241f88e227653eaf55a42.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/6a3641a931f942f8a1f6c1b61ce78aa9.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/15be56dcde58465c9899467892dcf7d9.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/aa182ac96362419aaf2f924cbf8a6eec.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/5bd1038138e6472cb8129a60aec74e19.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/77d6f6ef5deb4690af3a9bb87d9d8bf3.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/2c6f6daab4d04569ac31310a918eb312.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/2b337f0a5f0d46cfb2c549a9f829a5bc.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/dbed543e406d481cb88b2e9b3022125b.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/439e8ace39564b20b77f6d546a198c44.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/a7d6557e3a014da39384002ea4dfb888.jpg"
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
    "tagline": "Spacious 3-bedroom, 2-bath single-wide featuring 1,050 sq ft of open living space",
    "sectionType": "Single-Wide",
    "price": 74900,
    "startingEstMonthly": 419,
    "beds": 3,
    "baths": 2,
    "sqft": 1050,
    "dimensions": "16' x 80'",
    "style": "Rustic Cottage",
    "description": "The The Pip is a precision factory-built single-wide offering 3 bedrooms, 2 bathrooms, and 1,050 sq ft of climate-controlled luxury (16' x 80'). Designed with an open kitchen island, vaulted ceilings, and high-efficiency Energy Star insulation.",
    "highlights": [
      "3 Bedrooms & 2 Bathrooms (1,050 sq ft)",
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
      "https://regentstorage.blob.core.windows.net/regent-public/be6c75f1ea664f7393dadc194362ecd9.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/27fee480e9c945ca832a50e222cf7676.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/61fce8efda5343878ad3a443cc740956.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/177f0272aad849d282eef06ffdb476f6.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/231e13b6bb0b4cdba040bb686002cb6b.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/cf3cbd85e8a543d9af0f7dfc32d37bfc.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/9657b83091c0473597bf787c9f03e817.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/68dde4402f8d43d0a936babfff408111.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/7e64b452b0a64518b9c105be17ae50ef.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/3ccd1a38a118472a84e7236eea0872ae.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/a2d6df74a6f84438aa4701b7b5014736.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/def06afd51b9417388ff75cfcd98db8b.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/bfe46a3637a44f748c546903f5e7c88f.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/8b088ccaaf2b4e478127056352058f9f.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/66846a34dd784ec584935dd47e4bf0b7.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/9602a9f59cef409397246592b376bdf2.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/e261a98bf80c4c229cee8a6465485a74.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/ef511f06a888440889194844a7fc6acf.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/364dd07633d448b3abc69cc38bf2a53f.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/d5a3cce2b38343a9be867340d99c8409.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/20325521b0bf4968a19833dce9538580.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/5f31010aba344ab9a86e11546341c9f8.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/147ec368853e4f29b29f91e70ca23a33.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/55639e76accb4f25a0da79a19e921dda.jpg",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": true,
    "isBestSeller": true,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-marsh-ridge",
    "name": "The Marsh Ridge Coastal",
    "tagline": "Spacious 3-bedroom, 2-bath double-wide featuring 1,650 sq ft of open living space",
    "sectionType": "Double-Wide",
    "price": 124500,
    "startingEstMonthly": 697,
    "beds": 3,
    "baths": 2,
    "sqft": 1650,
    "dimensions": "28' x 60'",
    "style": "Southern Elegance",
    "description": "The The Marsh Ridge Coastal is a precision factory-built double-wide offering 3 bedrooms, 2 bathrooms, and 1,650 sq ft of climate-controlled luxury (28' x 60'). Designed with an open kitchen island, vaulted ceilings, and high-efficiency Energy Star insulation.",
    "highlights": [
      "3 Bedrooms & 2 Bathrooms (1,650 sq ft)",
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
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/6c92966433db4096ab4dcb3fdb2fbd21.jpg",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": true,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-sky-harbor-3-0",
    "name": "The Sky Harbor 3.0",
    "tagline": "Spacious 4-bedroom, 3-bath modular featuring 2,200 sq ft of open living space",
    "sectionType": "Modular",
    "price": 224900,
    "startingEstMonthly": 1259,
    "beds": 4,
    "baths": 3,
    "sqft": 2200,
    "dimensions": "50' x 64'",
    "style": "Minimalist Lodge",
    "description": "The The Sky Harbor 3.0 is a precision factory-built modular offering 4 bedrooms, 3 bathrooms, and 2,200 sq ft of climate-controlled luxury (50' x 64'). Designed with an open kitchen island, vaulted ceilings, and high-efficiency Energy Star insulation.",
    "highlights": [
      "4 Bedrooms & 3 Bathrooms (2,200 sq ft)",
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
      "https://regentstorage.blob.core.windows.net/regent-public/db37fbb78a384292bc03e13863c98fe7.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/4e37e5c5d45842a5b74ba67b06481ba0.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/033ef99c6e534183af27067d29417413.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/d36fa181f0f24da3980461b6bb4fb7d3.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/35ded52b3dcb4b2594fb99a5e5ef11d4.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/17e08b323f614c2cb67e1eabda98c10c.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/1b5eae0abba74110b3dbe65d9de723d5.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/43be832b9ebc437d9d1ed61b57aa8ed8.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/4bac2a793d344a0db47bafa75f54ea72.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/d8f5a6baaa5a4b53ac8a32e1be093440.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/f707182877094869abaaa33087e1f075.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/d765a44a5d4040b8bc8a79bbb4008d1f.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/5b877e82d6844bc492702bbdaf9f99e6.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/fc7d0fdf11f6424e8180a977dfabe4fb.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/974aaca1ab5e4ff492208304e5d0bac1.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/90cd4fdd1a554000b9be402cfbe536c3.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/3c9c2dd18ab0427bb17a63c5c6493072.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/b3b3135787ec447eaf51b122f34705fd.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/c61189efb64e48a6ae0b6977d4b73ef7.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/b67ad707d7674123a56c07571615170d.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/c76a7bea8a9b41aa800809dffc4045ec.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/0aaa987babd34977a5fbf9ae3e18748e.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/ec467939ee634c808792ba9600d36340.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/a8bd066cb17d48319209c721641ce78d.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/0f95d98d2f4541a4ab98779542a2e68f.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/002b18b3000c4894870d9c6c3fa06550.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/9f81d491eafe440db7477b88ef69a65d.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/d457937a58864124a92c61546b3f6074.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/7e1bfc3f62c249fdb75e6d701d59400b.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/2ed51ed1b0d24dc8aef2643f69683810.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/abed30f4334b4765b026275075016ecc.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/ae623743b79b438797a66bb27e507fea.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/5fc88c952a2d478db8a54c3cc27bb8bd.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/4c31673822e2454eb442c9ba1c2bff82.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/87a4acb90176433cb22c6c5c3ad7e9a4.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/0f651723f69a4532bf9fce773d82aeab.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/e299fb629ade4a7e9fa8063b3bdbd788.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/98ed417a89944c2faf7ba11962b9bd0e.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/0878afa20e464bf4941cbef65ac686b9.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/f31b2ecf5c5a4e8e95ad7c2f7e35ab67.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/50cc0c347f2c4cccbde7db73f8d8c168.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/e65557f5017144c2b64b5dc7c21071e4.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/ad581ff450b14cd38320ea835114443e.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/5da5124541c84cb2b191f122d43a5136.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/89f706ded4974a4a934c0733dd511dcf.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/5c43d17e3b884d33be6a0cbf5f8f2206.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/9fbd0bccd227478e83dc588e652389f5.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/7e9cc54a4e314b409e8392a9188eec25.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/044220b7c0f74cbf84d757ba38511861.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/00ae3e7da4a648d09606f8fa5ec28cd4.jpg",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": true,
    "isBestSeller": false,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-englewood",
    "name": "The Englewood Farmhouse",
    "tagline": "Spacious 3-bedroom, 2-bath single-wide featuring 1,050 sq ft of open living space",
    "sectionType": "Single-Wide",
    "price": 84900,
    "startingEstMonthly": 475,
    "beds": 3,
    "baths": 2,
    "sqft": 1050,
    "dimensions": "18' x 66'",
    "style": "Modern Farmhouse",
    "description": "The The Englewood Farmhouse is a precision factory-built single-wide offering 3 bedrooms, 2 bathrooms, and 1,050 sq ft of climate-controlled luxury (18' x 66'). Designed with an open kitchen island, vaulted ceilings, and high-efficiency Energy Star insulation.",
    "highlights": [
      "3 Bedrooms & 2 Bathrooms (1,050 sq ft)",
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
      "https://regentstorage.blob.core.windows.net/regent-public/923e52dbf99840b3a8a51a968073fe77.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/ef453d5bead04816b8ff36ebc534da5a.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/8464b9c8637e46dc9f3043b4306d29f4.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/1044bd9a16a949b797c1de70e833473b.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/65478e54195f49e2842d22f1c01e89fd.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/a2ba7683071b4e1f9cb051d47d0f0921.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/a2797578738245d288efbf956e14ea38.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/4585d0e359b747ed82f4922838a731ec.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/a2d0660629f24c8a8b8af71cc91b7a71.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/bbcf013175344fdfade0596298d3c0ac.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/2b10635faaf04c3c907dbb7d63c48b27.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/f2939f96078947f4a42b435b566d68a1.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/5184999053254a249a216eee2e0e51c7.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/e733da3629a24b949d2783b30f6d6b22.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/25b0c9e91a2040908c44cf5c29eed32b.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/774387fd74c744288a25787f55ce92d4.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/ea0274eb175e47a4b786524771036e60.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/45241b8f9bbb4f5c92daf86f1cccf107.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/be2ca3d23e91429a9b1537a98180758e.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/bd4f28cbb30743489119c362950f3157.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/e31b5c7863764aa3abeaa368ee2483a2.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/ca491fb00bfb4a0f8fcea82c34a447d9.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/1b5ee093024e4ea5b0ce8b3e43ef8fb1.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/b9ce3fc8a5624093996af33787833f54.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/accc94c3b546401b82f9b9d87319e4a4.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/dc57e1c4082c413cad40590e2cb8ad24.jpg",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": true,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-pinnacle",
    "name": "The Pinnacle Estate",
    "tagline": "Spacious 5-bedroom, 3-bath double-wide featuring 1,650 sq ft of open living space",
    "sectionType": "Double-Wide",
    "price": 145000,
    "startingEstMonthly": 812,
    "beds": 5,
    "baths": 3,
    "sqft": 1650,
    "dimensions": "28' x 80'",
    "style": "Craftsman Haven",
    "description": "The The Pinnacle Estate is a precision factory-built double-wide offering 5 bedrooms, 3 bathrooms, and 1,650 sq ft of climate-controlled luxury (28' x 80'). Designed with an open kitchen island, vaulted ceilings, and high-efficiency Energy Star insulation.",
    "highlights": [
      "5 Bedrooms & 3 Bathrooms (1,650 sq ft)",
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
      "https://regentstorage.blob.core.windows.net/regent-public/bd6796fcad0444ad8a5278f2fc964629.JPG",
      "https://regentstorage.blob.core.windows.net/regent-public/e024193d6452495286fc147ffec3cd41.JPG",
      "https://regentstorage.blob.core.windows.net/regent-public/7815f3545b5942479bed8dee5f2259a9.JPG",
      "https://regentstorage.blob.core.windows.net/regent-public/c3b873c402b14849a95dc36c4287a16c.JPG",
      "https://regentstorage.blob.core.windows.net/regent-public/00c2bb7b4bf9411690bd4b0242851242.JPG",
      "https://regentstorage.blob.core.windows.net/regent-public/3e7facc6fc4d490d838def00ce1498cd.JPG",
      "https://regentstorage.blob.core.windows.net/regent-public/735b58b4c6ab4eb7b854eef899f2e0e5.JPG",
      "https://regentstorage.blob.core.windows.net/regent-public/1571407b3e8247c29fc7af6a6892dc14.JPG",
      "https://regentstorage.blob.core.windows.net/regent-public/bf125eeec05e4faaa9c1ad55c85679f8.JPG",
      "https://regentstorage.blob.core.windows.net/regent-public/2772240161194360a6c387f76523102a.JPG",
      "https://regentstorage.blob.core.windows.net/regent-public/45a99cf88b3d476fa648ed9e49f4e040.JPG",
      "https://regentstorage.blob.core.windows.net/regent-public/aa75bdc0e9834ce5a202ac0940bcee56.JPG",
      "https://regentstorage.blob.core.windows.net/regent-public/086c0885355c4dfeba9ab0944ad12b29.JPG"
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
    "tagline": "Spacious 4-bedroom, 2-bath modular featuring 2,200 sq ft of open living space",
    "sectionType": "Modular",
    "price": 198000,
    "startingEstMonthly": 1109,
    "beds": 4,
    "baths": 2,
    "sqft": 2200,
    "dimensions": "28' x 80'",
    "style": "Southern Elegance",
    "description": "The The Big Sky Modular is a precision factory-built modular offering 4 bedrooms, 2 bathrooms, and 2,200 sq ft of climate-controlled luxury (28' x 80'). Designed with an open kitchen island, vaulted ceilings, and high-efficiency Energy Star insulation.",
    "highlights": [
      "4 Bedrooms & 2 Bathrooms (2,200 sq ft)",
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
      "https://regentstorage.blob.core.windows.net/regent-public/eb5778260f714992964f05806314b689.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/a34cfe096cd24d348f23c922f54134c2.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/d6e3b7e149a54a1e9005af4fe68eef27.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/4bb540babc54448e97a9664e480f99ef.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/79a7ba7125d643749ff6c51059cf1236.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/53f72387c07d4fe191ddd096f7c7c14c.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/9a1fd19388f74ad7b4d31d15ebc6063b.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/f2138481cb1d482aa5facec73b39400b.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/2aa0b2ad039146eaa86ccf8f2e6a7c77.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/59bec9af296c4d30829eaa2f6eca6243.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/98e73eaa1c974d878b7c023324078fb7.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/f5b6c32456f348c29eeb32ff82a26019.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/5bfca690ed2441a786b45a1aa9b4a848.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/f1853638611d439582b2b27b6fadbac2.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/1196051ccc9d422aba3a9fc4d40a8f2b.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/b0ed1bf6617f4831b5598d3b613bd1a4.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/38053ff1ffdc4327ade47cdac6b3976d.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/ee0cc053fe52457db7b3cd468adf5958.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/cbccec7d9e8c4588be24a133ecbe9951.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/a6b8f2d146804ad690d18242d6efb91f.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/baa1377cfde84bf0a749168259408257.jpg",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": true,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-yellowstone",
    "name": "The Yellowstone Lodge",
    "tagline": "Spacious 4-bedroom, 3-bath modular featuring 2,200 sq ft of open living space",
    "sectionType": "Modular",
    "price": 215000,
    "startingEstMonthly": 1204,
    "beds": 4,
    "baths": 3,
    "sqft": 2200,
    "dimensions": "32' x 80'",
    "style": "Minimalist Lodge",
    "description": "The The Yellowstone Lodge is a precision factory-built modular offering 4 bedrooms, 3 bathrooms, and 2,200 sq ft of climate-controlled luxury (32' x 80'). Designed with an open kitchen island, vaulted ceilings, and high-efficiency Energy Star insulation.",
    "highlights": [
      "4 Bedrooms & 3 Bathrooms (2,200 sq ft)",
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
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/be5f56ab6ed9483bb1eff9a8c584e634.jpg",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": true,
    "isBestSeller": false,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-fall-creek-3-0",
    "name": "The Fall Creek 3.0",
    "tagline": "Spacious 3-bedroom, 2-bath double-wide featuring 1,650 sq ft of open living space",
    "sectionType": "Double-Wide",
    "price": 132000,
    "startingEstMonthly": 739,
    "beds": 3,
    "baths": 2,
    "sqft": 1650,
    "dimensions": "32' x 80'",
    "style": "Modern Farmhouse",
    "description": "The The Fall Creek 3.0 is a precision factory-built double-wide offering 3 bedrooms, 2 bathrooms, and 1,650 sq ft of climate-controlled luxury (32' x 80'). Designed with an open kitchen island, vaulted ceilings, and high-efficiency Energy Star insulation.",
    "highlights": [
      "3 Bedrooms & 2 Bathrooms (1,650 sq ft)",
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
      "https://regentstorage.blob.core.windows.net/regent-public/b174b20dc81049c687101640ad2d2c1c.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/d2345d041c25426b8ce98ca0fef02600.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/91ecf2c887f3465b9675cefd0e5f6ce3.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/f20b49158794481d884a50fb26d03a50.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/3217fc4094cb45629fc8720a3455e540.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/1de606aebff44b5ba2608b270d011564.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/83c66714c3194ad6bca0ea0fc9fc6a76.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/179571299c9d4c11af51c0ca9ab7140a.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/0abbb394cc944956944bcee2fb9c35fa.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/bfa1b3a9671b45f7973d5faba3f2d176.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/8e3194c57e8c453a880443b86d2a1594.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/3b0b38164c914960a0b99e49e4c6bd0c.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/abcdf7f9c5fc43478ac2caaac126fb8b.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/2d87ac55931845a99d00ae8f6264c2f3.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/7f96eb1d4ea14c65833171e0682a1f4d.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/8e16916f25e24288a4b5c31375e07a59.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/19b37e2628ef4671b132b57a4b63bf00.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/298ff179c9714cf0a00ff783ef1eb4fe.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/62713fc58ef74376ba2d74a36c5d560c.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/92182ba6f07842a39d31beecb1d53dac.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/e20195ff68f541d4a134d96eeed87212.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/1126f78719e34fbebd56fdde70b33456.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/3a874ee3097d44c9a7a7363f0fe2197d.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/8c90b3d9399647829b1b4978bfa75300.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/31929600f16549fe9663131fdc88d905.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/5d7929a0fba640c3bb4aef1c647fb95d.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/eccd94fb34764222b2225e0966004af4.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/6f38bcc5f20a41e2afca09c658e980c0.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/13dc617d5d844492a5ebe0a5759f9a65.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/154a31a242d64d189ed812f6b7ccae1b.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/feb1df8c8ef14c6c8185e6e256c15235.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/8b3fd17a9090493aa89b44bc1af7afd1.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/27c5bb157257401ba3e9354f287e4929.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/7ae96a5c221546519c023b435071440f.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/e5ff60c47e734fc3a12270aea16349ed.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/208161491876457f9aa063aa4c9df5f2.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/63fa7e47cac7437395e8fc1ae54f0040.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/a68d808658d54e208c719e1cd23acd01.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/14dfe5c0ff37447ab640d858626466a9.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/e4b3ef50c88f473f9133e368c97858f7.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/ada383b2b6584d759e9e29bd6526b348.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/a657ba84f9ed4f5da01858574cca157c.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/1d8c97ae997a49309891a102d8f08f7e.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/7f0faa681395493c903c0f9cacad7ced.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/a676f45cd409402ba57212d2d73278f2.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/f63d060d711e4b68a389ce30e5efb570.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/10c03b216e954d33a4a724002356f4b9.jpg",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": true,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-delashaw",
    "name": "The Delashaw Cottage",
    "tagline": "Spacious 3-bedroom, 2-bath double-wide featuring 1,650 sq ft of open living space",
    "sectionType": "Double-Wide",
    "price": 129000,
    "startingEstMonthly": 722,
    "beds": 3,
    "baths": 2,
    "sqft": 1650,
    "dimensions": "31' x 68'",
    "style": "Rustic Cottage",
    "description": "The The Delashaw Cottage is a precision factory-built double-wide offering 3 bedrooms, 2 bathrooms, and 1,650 sq ft of climate-controlled luxury (31' x 68'). Designed with an open kitchen island, vaulted ceilings, and high-efficiency Energy Star insulation.",
    "highlights": [
      "3 Bedrooms & 2 Bathrooms (1,650 sq ft)",
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
      "https://regentstorage.blob.core.windows.net/regent-public/df9cb549f7c94f27b44ce61bda6bfa76.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/1ac1f30b221041bca3ea1a6b366a210f.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/9f5faee30f8e4961840a15371ad47c9a.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/09838891fc1348c5b7332e742eab4bcc.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/1ea36901f96549b987717c681e9a0f1e.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/f02a80e8977c414ebc4b239fe65edeb8.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/f70c27d8ed6a4f158adf308c1df4aed8.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/d5140c56fb9c4fc3898c363491057a40.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/58c25cd68b974bb39402f9995c12dbb0.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/0d72d0e1f0ee4b39a46151e1186bc2db.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/45b1844ef5a4424b9d3a1b1590b2a31c.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/bee3d8243ee64f6c993f95ffd0d0f2a4.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/e5f2d8646d2342c2989b19318183c261.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/ea526628578a467b8b0b81cd617a04f9.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/3471f5a235934aa486a1080ba8cdae0e.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/1e13e29fd4bc4674942b2a4b59a25da4.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/86ba6192e85c49d683ab1e249d73de9a.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/c2ca79365c244dcf908d4580ef8b22f1.jpg",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": false,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-bourbon",
    "name": "The Bourbon Estate",
    "tagline": "Spacious 4-bedroom, 2-bath double-wide featuring 1,650 sq ft of open living space",
    "sectionType": "Double-Wide",
    "price": 139000,
    "startingEstMonthly": 778,
    "beds": 4,
    "baths": 2,
    "sqft": 1650,
    "dimensions": "32' x 80'",
    "style": "Southern Elegance",
    "description": "The The Bourbon Estate is a precision factory-built double-wide offering 4 bedrooms, 2 bathrooms, and 1,650 sq ft of climate-controlled luxury (32' x 80'). Designed with an open kitchen island, vaulted ceilings, and high-efficiency Energy Star insulation.",
    "highlights": [
      "4 Bedrooms & 2 Bathrooms (1,650 sq ft)",
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
      "https://regentstorage.blob.core.windows.net/regent-public/0aea3123dd7344828340229137f5e6c7.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/4886f6617f174efa9e9e437631c431d2.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/ba6a1507791e4b58bc4ea6841808c539.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/1fddbcf3342349a2b221c68453c86ed4.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/c37590a096cb4c629ac24bcc4e10acd5.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/7f254b505801427b855564b623ff7df6.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/a28e9c0daabf431aab56a84e2e1ea849.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/80d3e373aa8c4200aa233564d88a602f.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/04dd60d2b088452f8a8ad8ddbbe1d15b.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/951e6ae3bc3049fc814efe812f904efc.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/77d57c7a052f4f179d53e3d1124de91e.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/7e60c974eeab4a4f887d510bec1d13dc.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/bb24156d5e204d9c893a8cf221d4b79b.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/b8962ffe6b704f9eae4e361d4e45cab7.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/53d63a17d44e4ea9a324a5789d7e38da.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/7e6e1f7028d1464bb0a1db21e8f6049e.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/4a99e26dfc4b416a8f3d7f66dc4f65e8.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/92baec5cde784678b76c3ff5982de01d.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/08051638ce9149a999d3ce8f17eeabc7.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/18bd7c0678cc46c98f7c538284055176.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/ae118d54241d408f90445f99bbda8c7c.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/cc916e57d65c4424aa99f61a9151a0a7.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/c6fa9520f2714fc980ca79d223e8ccce.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/becd7b84a97846c6b9514f60dc9e9755.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/cfd5dc8369374e19a4c6a16247f898da.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/79020ff2181a4dbdb9f6ec931fcbbf34.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/a58bc89ad1df42058f60096aba34d513.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/8f643ec3189b43daaa52dd002c0a1d74.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/ff0a824de277455da962fe780e3b8e9e.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/2c524acc27174c2dac00d35092b45805.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/9f7d54dd237e428c89b3f5ece5c28fc8.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/9ca2020b3d15429e862f652f1c33863e.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/890b42a59b844afea3b7f91783cedc48.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/6c92966433db4096ab4dcb3fdb2fbd21.jpg",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": true,
    "isBestSeller": true,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-magnolia-series",
    "name": "The Magnolia Classic",
    "tagline": "Spacious 4-bedroom, 2-bath double-wide featuring 1,650 sq ft of open living space",
    "sectionType": "Double-Wide",
    "price": 142000,
    "startingEstMonthly": 795,
    "beds": 4,
    "baths": 2,
    "sqft": 1650,
    "dimensions": "28' x 70'",
    "style": "Modern Farmhouse",
    "description": "The The Magnolia Classic is a precision factory-built double-wide offering 4 bedrooms, 2 bathrooms, and 1,650 sq ft of climate-controlled luxury (28' x 70'). Designed with an open kitchen island, vaulted ceilings, and high-efficiency Energy Star insulation.",
    "highlights": [
      "4 Bedrooms & 2 Bathrooms (1,650 sq ft)",
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
      "https://regentstorage.blob.core.windows.net/regent-public/fba697e017724d1b9869291e6e1372fb.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/4c0f8dfe41ff472bbb9aed90e2e3cb99.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/4fbe8aa0062b4bf6a46ecf3f7c46de6a.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/98db4863a5fb467f85a5e933a54224b4.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/5469f45092e3497e89004e3bfcae1776.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/7c178c7ee76b462ba85f6c1fadc89634.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/5315edc23dac4bde90fc5f2936a6afb0.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/e2c4df1773b8416c80cb2b0c20fc68e1.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/90a2ded038034a0aae1ed18ab507dd0b.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/8424db9e46a145bca2880df143624d27.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/4cabf81a332c4230bb135f26827d3d59.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/cca421853be842569e882f5b8c780dad.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/5487afffb7144ab8b9f8e613515ad5f8.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/97feb52ca507409da79ebe9f89bc1c4a.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/aa5700a5c39b4791870d4fe13e1404ad.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/617d5c366441480da4d337ef85842e5b.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/6e27248179514bf98fc4aa707f4ec673.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/9deba35f058144afbde4ec6c4246d430.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/f8daf49ca3bc45008dc34d785a85b2ec.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/1463e73cb10e479d9b827e24af274dc4.jpg",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": true,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-ace",
    "name": "The Ace Single-Wide",
    "tagline": "Spacious 2-bedroom, 2-bath single-wide featuring 1,050 sq ft of open living space",
    "sectionType": "Single-Wide",
    "price": 69900,
    "startingEstMonthly": 391,
    "beds": 2,
    "baths": 2,
    "sqft": 1050,
    "dimensions": "16' x 68'",
    "style": "Minimalist Lodge",
    "description": "The The Ace Single-Wide is a precision factory-built single-wide offering 2 bedrooms, 2 bathrooms, and 1,050 sq ft of climate-controlled luxury (16' x 68'). Designed with an open kitchen island, vaulted ceilings, and high-efficiency Energy Star insulation.",
    "highlights": [
      "2 Bedrooms & 2 Bathrooms (1,050 sq ft)",
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
      "https://regentstorage.blob.core.windows.net/regent-public/1687f08be18e4a3ca55f7eb42b6428b0.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/3d3f2a00f2f04043807fae8e2e75966c.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/de5d677f48c44ea795b46f103baba9db.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/d0c27ed05bbc47dcb15cdf5d725546fc.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/3f8a5346646f496ca2538657d3f039e3.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/07e191b2b9604d65ba90f9060461e867.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/db1af0b8816c4faea78cfefcf13f644d.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/4f39d80a262f4cfb9686db195f808025.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/59378a229ee24f2a9ba6d9aab09b833b.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/5b044aa2c79642bfb968191fb196b82a.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/ffc92fb40ee044c18e991dac0c763c3c.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/8ba7b0a962ec4b709777c6f4f85739a7.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/1a148f8620f14f00a3769417ad03f7a7.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/bdbcf905b31b4e3388068657c7f0d3f3.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/6dbafa0422084588bdc9842637739da5.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/6f474e7a956b40faa868e3e89ae1e18c.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/035373539ad04c78801a4944a4292581.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/1fdb25d65cdd45d9a42771a78bea1913.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/d5256fa5fa1a43cd936eeacd6db4e316.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/08815f49b1f1429c937ae4f5d17f133c.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/eb409da8dba94b5ca8f4a4560ac703a4.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/269111ac9d1849a4ac48e40752db2bf7.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/2f8c7f7b3c524a1c8e08e0c8dc786410.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/27145667cee149eca260fb334e76aeb1.jpg",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": true,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-eva",
    "name": "The Eva Cottage",
    "tagline": "Spacious 3-bedroom, 2-bath single-wide featuring 1,050 sq ft of open living space",
    "sectionType": "Single-Wide",
    "price": 72500,
    "startingEstMonthly": 406,
    "beds": 3,
    "baths": 2,
    "sqft": 1050,
    "dimensions": "16' x 80'",
    "style": "Rustic Cottage",
    "description": "The The Eva Cottage is a precision factory-built single-wide offering 3 bedrooms, 2 bathrooms, and 1,050 sq ft of climate-controlled luxury (16' x 80'). Designed with an open kitchen island, vaulted ceilings, and high-efficiency Energy Star insulation.",
    "highlights": [
      "3 Bedrooms & 2 Bathrooms (1,050 sq ft)",
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
      "https://regentstorage.blob.core.windows.net/regent-public/2a988d2539b84b52910095f4f4c08e9c.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/774e0446547c497b92a7c95f540462f1.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/bd9e4e53c40e444fa90b1c9bce85ebff.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/f1faf290c11e4d4eb83222b05739dc0d.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/f0445f8fbbf64f15beec9c0536635707.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/4cae1c5956324f67b3e25d30dea325ce.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/af4bdeba45924bc8b9404501712a6524.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/ef9b272edafa4e28970fb1d241bcdeef.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/ef1812a9bb87402b9ba5d54e107832b5.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/65890f2be1f34dd08326cf89c5b2bb5c.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/92182eee94d540fe8128f3f612487c82.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/e516ce3127aa4aeabf95ef27455516ec.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/43cbf0f05eb3491c8c875041297508c6.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/bb56e6ae1c184784b231250907583d28.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/75690a7e00894ba19d91d01828962753.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/ba1f4ba1de8640329f5a3a6b3a6b816b.jpg",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": false,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-charleston",
    "name": "The Charleston Haven",
    "tagline": "Spacious 3-bedroom, 2-bath double-wide featuring 1,650 sq ft of open living space",
    "sectionType": "Double-Wide",
    "price": 155000,
    "startingEstMonthly": 868,
    "beds": 3,
    "baths": 2,
    "sqft": 1650,
    "dimensions": "16' x 82'",
    "style": "Southern Elegance",
    "description": "The The Charleston Haven is a precision factory-built double-wide offering 3 bedrooms, 2 bathrooms, and 1,650 sq ft of climate-controlled luxury (16' x 82'). Designed with an open kitchen island, vaulted ceilings, and high-efficiency Energy Star insulation.",
    "highlights": [
      "3 Bedrooms & 2 Bathrooms (1,650 sq ft)",
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
      "https://regentstorage.blob.core.windows.net/regent-public/7e89a05084304fb3974779afa5cc0a73.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/4694473d22f84f6786245135e42eca52.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/c55b8acb293e4b31848252baf3ee8c59.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/0098be32539c4a379407c138a2b65641.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/398911e31c154faf83e0e586e386b1f1.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/92a7769783cf4fceb9a723815661cfb9.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/67f0779440534390b53535a45f20cb9d.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/ea1b510a438d44fda8c695389f022664.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/be6daa4980894527ab26517718de7f1f.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/17d9d06bac80435e8e9594d8614b7c3c.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/28c1205c0c4c44c496465fc7e0545c49.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/f675b7cd5de24db0908678c5fddfac27.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/c39ecb656043462ab0c74ffb92836f22.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/d76a3c9b6325403ea8300970054e696f.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/bf1e977bd6aa4878af507b8eeb15548f.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/edfc140bf9614b00bb49fcc064170889.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/51999ed3216e409b8281caf771a0146c.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/2a0999658f744fd4bfe01b6f67b3619e.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/799530d1b8ef48b2bb57119375b45405.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/d6b998701a844f5bbe07c251a2c18e11.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/f6d7bac3ad7f45149d5e09206a47899f.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/08c1739f53fb411bb10ee046dcd79fc5.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/25fd0259df9140c89a2f7dac06af6b6e.jpg",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": true,
    "isBestSeller": true,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-yellowstone-craftsman",
    "name": "The Yellowstone Craftsman",
    "tagline": "Spacious 4-bedroom, 2-bath modular featuring 2,200 sq ft of open living space",
    "sectionType": "Modular",
    "price": 205000,
    "startingEstMonthly": 1148,
    "beds": 4,
    "baths": 2,
    "sqft": 2200,
    "dimensions": "32' x 78'",
    "style": "Craftsman Haven",
    "description": "The The Yellowstone Craftsman is a precision factory-built modular offering 4 bedrooms, 2 bathrooms, and 2,200 sq ft of climate-controlled luxury (32' x 78'). Designed with an open kitchen island, vaulted ceilings, and high-efficiency Energy Star insulation.",
    "highlights": [
      "4 Bedrooms & 2 Bathrooms (2,200 sq ft)",
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
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/ba1f4ba1de8640329f5a3a6b3a6b816b.jpg",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": false,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-kinlock-falls",
    "name": "The Kinlock Falls",
    "tagline": "Spacious 4-bedroom, 2-bath double-wide featuring 1,650 sq ft of open living space",
    "sectionType": "Double-Wide",
    "price": 148000,
    "startingEstMonthly": 829,
    "beds": 4,
    "baths": 2,
    "sqft": 1650,
    "dimensions": "32' x 80'",
    "style": "Modern Farmhouse",
    "description": "The The Kinlock Falls is a precision factory-built double-wide offering 4 bedrooms, 2 bathrooms, and 1,650 sq ft of climate-controlled luxury (32' x 80'). Designed with an open kitchen island, vaulted ceilings, and high-efficiency Energy Star insulation.",
    "highlights": [
      "4 Bedrooms & 2 Bathrooms (1,650 sq ft)",
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
      "https://regentstorage.blob.core.windows.net/regent-public/685d695e97a94f5288a48a3a84eda21d.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/8a4cd0d5f9bf43f0a14dd66068993a56.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/bafddb0035d0487ab57aad7bb8b351ec.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/e2652734138f4cfbae2876912bf69b28.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/3ba2dce7eadf4192bf8552af6796310e.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/fce7af74af464798bef1206aa842dd0b.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/6d614e226dcb4065a7f745eaf9d57f8d.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/4e1c4a82a16341e1966d43a6984425c1.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/a261b43291724d569a49b6f075d34d00.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/fbdb9fe1facd45d9ae8b30476582e46f.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/4868f636a73d41e6853b9d917077a6ea.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/9a5e2480571d4d85be9c48fb85ad82b7.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/c0bec3e2c9354419870e68bdc0c9048f.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/9969fc0006f14a89916cf98273fb81cc.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/d46bff110dd343909ae79a7203b04502.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/6056bcfbeda149539455c796ff751abb.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/cc5f3a2003d4481fa99fc7ee544ddf97.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/d365be8c90924880b2ea93b8bacc4cb1.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/5359068af9c4456880d74c574fee8278.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/0cf67599f94a42f2a72a69203eb7b100.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/cf1b4cccedd8427f9a9f64c3d704aedb.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/c86826f4d0f34522aab6a45077311c8c.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/a271c469b2e6452b90aaac56336c7882.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/00e87bb2c5764340b3a0a920276d23ac.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/8ba7a0152f2e4dbdbbab9f4207c44259.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/59b151ac9ac244adb411ae564459ddf7.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/547b9a6634b245228abafedc8f1731a9.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/0867dae3079c4b4e95606cbb55a0b592.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/a19511068eeb45a5a14c40c076713414.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/a87e8112b36a43f39916805ba7401bfc.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/294c338b129f4cbc9993b4323142231b.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/e118a39bc7fe4e37abe0658006dddccb.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/a485911e57d543b9b26581402a88b380.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/8193722db38d43efb38a5a236b6b7d90.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/06b1bf1211d34b31a36bdbe4fa38897e.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/00a04bed77f643d0804e168c78e3f8f3.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/0abca76bf6a547889a4a56b558cf404e.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/fe4f4a24ff9446479b0b78d8d7b934d6.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/1aae60dcc83043659a8d8b1ad8689978.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/a5ebaad3d80843938e047d47c2486b14.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/19d087df6c8341378dd0c2044e07fa07.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/60967a715fe14de689f5fd98292cf235.jpg",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": true,
    "isBestSeller": true,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-fay",
    "name": "The Fay",
    "tagline": "Spacious 3-bedroom, 2-bath single-wide featuring 1,080 sq ft of open living space",
    "sectionType": "Single-Wide",
    "price": 68500,
    "startingEstMonthly": 384,
    "beds": 3,
    "baths": 2,
    "sqft": 1080,
    "dimensions": "16' x 82'",
    "style": "Rustic Cottage",
    "description": "The The Fay is a precision factory-built single-wide offering 3 bedrooms, 2 bathrooms, and 1,080 sq ft of climate-controlled luxury (16' x 82'). Designed with an open kitchen island, vaulted ceilings, and high-efficiency Energy Star insulation.",
    "highlights": [
      "3 Bedrooms & 2 Bathrooms (1,080 sq ft)",
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
      "https://regentstorage.blob.core.windows.net/regent-public/bd76f256128d430ba6851919c280f91c.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/600f59667c88470f81528b743cb6181f.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/4b67e6c8efb042f799f3640256fc0035.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/444f1235e85945c8a5938e099ea530ac.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/79c33045c8c244a68adaed7b9a48504b.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/6d659a77811143698f6226e0e6e6d12e.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/55fcc9b0dd0d493f876b31f6fc044d89.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/ec05abc26f6e4962be1c9965ebefc530.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/936d6dca6af242549f5b086cd6758b5b.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/a889905cd2d24e26b754a59bac45e901.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/410de3fefe1047ccbec2504d586a2529.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/8df1e037202c48e29d1c6f9ff0aabd26.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/dfea0c864ae54c09bccb81844da2120e.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/f455e3d75951403cb5fa8bbf4d57d197.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/05f97067be584571b69b1c68fd4aa06b.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/a9ab66b18c2145eaa1768f1b0232a46c.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/a3ba93ee68034d859f77133ff1207666.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/f2173d55adbb49a78e74a33a075fe68a.jpg",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": false,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-iris",
    "name": "The Iris",
    "tagline": "Spacious 4-bedroom, 2-bath single-wide featuring 1,080 sq ft of open living space",
    "sectionType": "Single-Wide",
    "price": 71900,
    "startingEstMonthly": 403,
    "beds": 4,
    "baths": 2,
    "sqft": 1080,
    "dimensions": "32' x 80'",
    "style": "Modern Farmhouse",
    "description": "The The Iris is a precision factory-built single-wide offering 4 bedrooms, 2 bathrooms, and 1,080 sq ft of climate-controlled luxury (32' x 80'). Designed with an open kitchen island, vaulted ceilings, and high-efficiency Energy Star insulation.",
    "highlights": [
      "4 Bedrooms & 2 Bathrooms (1,080 sq ft)",
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
      "https://regentstorage.blob.core.windows.net/regent-public/ba747d47b3de454582947def72a462ac.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/2c6b96eea227402eabe1afccaaa2252f.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/768effda5a79480599a0ce1e11f06e4d.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/9fb296f3977140c596c81f7fb4748984.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/eaecf3efbefb45e4a62a4a2d7ad33fbd.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/21606aad8710415a87f1d64bfa294435.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/84b8ed75de314bbf8d1316925866a2a4.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/11a3a4138d10434a8b82a47306d6dfdb.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/29b7c2a5fefc49c9af903a31c881765e.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/e7c5297d845148b89bbbf3864637e9a1.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/c6573b10ff6b4f2bb293e0ab0ae5bcc5.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/82cdb0e8a15d467abaddb71405caae58.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/349c6d2b691b4bfa9859bb231c3f0ae5.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/8c5679a466ad4c48b517113b393d8d34.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/56a6efc3023644ca8778f2bc4e00227b.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/cc033bac4b634bcf997fa0985facbe83.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/c25d538daeef4168855715eb705731a3.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/f5db131217b5406b85996ab75389d882.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/92618649f6f344679f428dd6d8c7f7df.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/39c4cfe899a4495dafc79d6cf8d5a076.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/277b3de33a34451784415556ce3df0df.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/68a22785370a48a490ae2914f09e30de.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/da2a79222e8a4bd19efb239e1b38e197.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/77cd01c154ab40a8aae6779df9a7e46d.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/5f6bd11e9fe6491088c38c6f9f09b56c.jpg",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": false,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-juno",
    "name": "The Juno",
    "tagline": "Spacious 4-bedroom, 2-bath single-wide featuring 1,080 sq ft of open living space",
    "sectionType": "Single-Wide",
    "price": 73500,
    "startingEstMonthly": 412,
    "beds": 4,
    "baths": 2,
    "sqft": 1080,
    "dimensions": "32' x 70'",
    "style": "Minimalist Lodge",
    "description": "The The Juno is a precision factory-built single-wide offering 4 bedrooms, 2 bathrooms, and 1,080 sq ft of climate-controlled luxury (32' x 70'). Designed with an open kitchen island, vaulted ceilings, and high-efficiency Energy Star insulation.",
    "highlights": [
      "4 Bedrooms & 2 Bathrooms (1,080 sq ft)",
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
      "https://regentstorage.blob.core.windows.net/regent-public/a788e9a30efd4b39bf5e35949f33348e.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/5ab0db9711a541c1bd669e03deaa8719.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/27c6d3a8066145f49f71d307288410f6.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/6d68782d3b8e43278255e85d7076f8f2.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/4da927feafa7421d96531e83864b2eba.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/d52bc2b3cd1e4cfdab16b2d30160e61f.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/a5f765eba13f4f55a5ef2bd43abde9fe.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/4a0f68befe2442f7986816e9c52139c2.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/5f1956e2b3364769b9b81a71aa32603d.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/c159564d8d974556af1a4f103f1543f3.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/c1a7b89ee8fd48b69e3fdc36337ce86a.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/b216040260cd4f66ac534dd152d850b0.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/8cb428cab6f3411a914bdec95b4df568.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/653af319439047f6b20e8d31db2f2e86.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/c8b35268450f49b9b35237c7f89df328.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/c536001ddc0a40ba8ea2bd5c4821a760.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/cf601ef6371b4d788ce77b7058974c8c.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/7d344fdd84ca4987811d14bc7d707d31.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/debc195eb1c64243a21cf157705496dc.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/0a64752a21474d4da107d819a7a8ec64.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/073b64fc0fb34dd6a7e1c3709806b297.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/468802585c5849df882a9784b9178f7b.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/7a4647f0765340359c1758a0fa2d6b5e.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/0d4ca529264040d6a7edd2d599baed52.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/25b4680a87f740aea602ea18100a5b01.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/39f172c590e44780ac479c1a9d88b6f8.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/e2d36354e6c24ccf9a2c9e6720d1b33c.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/89771f8e1a0f4313b2f46790abf775b0.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/10c0a64669794c54bd76814fe829dca9.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/c499be66754944bfa04a160891d187c5.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/6b46b01d6ce148b883764866359601d7.pdf",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": false,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-levi",
    "name": "The Levi",
    "tagline": "Spacious 4-bedroom, 2-bath single-wide featuring 1,080 sq ft of open living space",
    "sectionType": "Single-Wide",
    "price": 76000,
    "startingEstMonthly": 426,
    "beds": 4,
    "baths": 2,
    "sqft": 1080,
    "dimensions": "16' x 64'",
    "style": "Rustic Cottage",
    "description": "The The Levi is a precision factory-built single-wide offering 4 bedrooms, 2 bathrooms, and 1,080 sq ft of climate-controlled luxury (16' x 64'). Designed with an open kitchen island, vaulted ceilings, and high-efficiency Energy Star insulation.",
    "highlights": [
      "4 Bedrooms & 2 Bathrooms (1,080 sq ft)",
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
      "https://regentstorage.blob.core.windows.net/regent-public/9707c28b40ea4e62a83eda2c9514b45c.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/bb99b3cde3934ed0bc7f31e7d8ac5cf2.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/28323bcc327e4bcbabd487824244a79a.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/5a13429986094f7a8c37eb46841d4140.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/fbdd22c2645f452583448cb49e1ff175.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/02d8d93c026646e68c4e8f7022312084.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/251a85e03dfa4775b07201c2db787112.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/ff08fbe8b6364e94829a84921eb660e8.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/d38f1d3ec7c143a7bd818f7aced7a30f.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/0be35408e1294bafab673ea14dbd8044.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/bef82085fedb4b3eac8096bd9b801ded.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/8d169e17a4a449ac88e0c55121078563.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/8be9f0565db4425496a5ceed0f6a5bdb.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/eb7b232359324c5584a6af755d0e3f37.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/522b91bb770245edac9da64aafda2e42.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/1e3d6a8344e24b89bb3f80c240f9cb35.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/02bfd6a6a72740ac91a3dc267676278f.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/41b082ea717f4a6e8e4071436ee928c2.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/0c43c9d4ea664ad0b5db99ccd6c4a68c.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/c45079b3e486442e8edf53ae45228500.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/20443e5c743f448389f2ee481cf94f18.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/3b8117b58b3e4ab59c7a517b4e9e7857.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/dbde09de078846e6975b01b76cee382f.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/63f10e497aa24c59b6251d2ac6e3baf3.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/9fa702c4b79349e7a76b3469f5f29000.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/0940a74421f340fba4ddb8bfcc6efeca.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/37d2c1f3a702412c8c9e93510269c1d1.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/08609f7c9a6b4069a2f765197fe28c83.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/d3d0e280d54c45248453c984c3bb2e53.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/a7bab47a141a4ccaa63dc3af856774e3.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/b35c6333c39f49be96d8d2e4c204838a.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/95339d49c6d448abb77d328b557d30a0.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/288d982626c1498b870b25fcd70a0cd4.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/708c4f38867d4c2d966ba6ff6e6cc377.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/6608df64b4c0428ba6b155ab376b2965.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/85a9c400c2ad4e88ba36965a9bb45d0a.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/26517354443f42cca0e791b41dc20161.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/8a44d063c7b34662ae8f82040aa2006b.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/ec8418ad81b148bba58a9ddd19b8ace5.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/aa3b2a2cbccd438197193b499ce56815.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/caa05ab877e24412bf6e58d9fbd599a4.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/6c034413fd0a42fb953eb5ccdd2673b6.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/9d290a87ac5f4aa384b80543a8cec79f.jpg",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": true,
    "isBestSeller": true,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-luna",
    "name": "The Luna",
    "tagline": "Spacious 3-bedroom, 2-bath single-wide featuring 1,080 sq ft of open living space",
    "sectionType": "Single-Wide",
    "price": 78900,
    "startingEstMonthly": 442,
    "beds": 3,
    "baths": 2,
    "sqft": 1080,
    "dimensions": "32' x 60'",
    "style": "Southern Elegance",
    "description": "The The Luna is a precision factory-built single-wide offering 3 bedrooms, 2 bathrooms, and 1,080 sq ft of climate-controlled luxury (32' x 60'). Designed with an open kitchen island, vaulted ceilings, and high-efficiency Energy Star insulation.",
    "highlights": [
      "3 Bedrooms & 2 Bathrooms (1,080 sq ft)",
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
      "https://regentstorage.blob.core.windows.net/regent-public/52eafc361e0f41aba84b84b74df69cea.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/ce8ba9fb068b45c9b012d7695c6fd406.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/054b32093f45466bbd51398509af5d18.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/6fa8d95e6db64d7aaf5aa43fb11e50aa.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/4f7b5f97378d4f04ba0c6c61cde41e08.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/784deaee74eb46b289b2f05dae340136.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/d0b41df2dac04982bf0aa0e07156d74b.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/afb427f5a73245599b4326aea24a3e3d.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/89e0d438f98b42dead4c754d01220cfd.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/f722a17ebeb04bf19392707ea34cea72.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/06c26e0882fc478db5c285e1e62fe5cf.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/2750c32681054e96b1e9c7b03f2b6c72.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/13e6fd1bd75f41059f4b949aa73d1771.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/2b22de0a009d42e3be454a587263998a.jpg",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": true,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-nova",
    "name": "The Nova",
    "tagline": "Spacious 3-bedroom, 2-bath single-wide featuring 1,080 sq ft of open living space",
    "sectionType": "Single-Wide",
    "price": 81000,
    "startingEstMonthly": 454,
    "beds": 3,
    "baths": 2,
    "sqft": 1080,
    "dimensions": "32' x 56'",
    "style": "Modern Farmhouse",
    "description": "The The Nova is a precision factory-built single-wide offering 3 bedrooms, 2 bathrooms, and 1,080 sq ft of climate-controlled luxury (32' x 56'). Designed with an open kitchen island, vaulted ceilings, and high-efficiency Energy Star insulation.",
    "highlights": [
      "3 Bedrooms & 2 Bathrooms (1,080 sq ft)",
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
      "https://regentstorage.blob.core.windows.net/regent-public/f8d3b6630e7c47d2a53a21d731af8633.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/f98d35d3d9e14c4ebb6f6c50b786cc2a.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/04fb3420a5484754911b886c3987231d.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/aaa221e032574ca19304aa14fb7cb095.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/752db7debe954f5e9e8f776a0bcfac83.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/52921dbda7a24f68a5732099be60a220.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/f54757d6a5ed483bb1e102b946d791d9.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/0ddc1454c50e4ec4b2f19a0090227a37.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/739e615fec5e413693a893afe6471bd1.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/d607fd66a2b34d988a3dd5b9048d5a79.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/fcfaaa4d200144c3b00843862af8c7ab.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/004341ece15f4cd7aab91f4b00f4d556.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/847f51471e4b4670a3eb7a9f7b4743a2.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/545cf9c717fc4499a429611f6ffb3131.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/6afa9a3f5d9a4af3b9d93e742fdbbc90.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/650d454342854f4cab721789b16bebea.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/c73e015ee0db47a2908265cca40dcc1c.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/b7b93960394e4874b40771fd9a6b4b79.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/c14e1a0e37754eba8eccdeaed30cf393.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/ae56138386fc40aabed2cad9263a02b6.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/8a49b536efd446d09e004701d84a23fe.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/d8b5dc18ef4044f49994dae8cac4f05e.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/f9db5300f1a247e7b16446c4cc72ac7a.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/fa9ae5eb72274dff8eab9eac2e36f4d7.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/dae8524d20fc445194b6bdda05f81c69.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/f5d15839f0e644ccbbb7438559e373bd.jpg",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": false,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-palmview",
    "name": "The Palmview",
    "tagline": "Spacious 1-bedroom, 1-bath double-wide featuring 1,680 sq ft of open living space",
    "sectionType": "Double-Wide",
    "price": 128000,
    "startingEstMonthly": 717,
    "beds": 1,
    "baths": 1,
    "sqft": 1680,
    "dimensions": "28' x 64'",
    "style": "Southern Elegance",
    "description": "The The Palmview is a precision factory-built double-wide offering 1 bedrooms, 1 bathrooms, and 1,680 sq ft of climate-controlled luxury (28' x 64'). Designed with an open kitchen island, vaulted ceilings, and high-efficiency Energy Star insulation.",
    "highlights": [
      "1 Bedrooms & 1 Bathrooms (1,680 sq ft)",
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
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/64db7eeb71234971b8faf9eb37645213.jpg",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": false,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-shorebreak",
    "name": "The Shorebreak",
    "tagline": "Spacious 1-bedroom, 1-bath double-wide featuring 1,680 sq ft of open living space",
    "sectionType": "Double-Wide",
    "price": 135000,
    "startingEstMonthly": 756,
    "beds": 1,
    "baths": 1,
    "sqft": 1680,
    "dimensions": "12' x 42'",
    "style": "Southern Elegance",
    "description": "The The Shorebreak is a precision factory-built double-wide offering 1 bedrooms, 1 bathrooms, and 1,680 sq ft of climate-controlled luxury (12' x 42'). Designed with an open kitchen island, vaulted ceilings, and high-efficiency Energy Star insulation.",
    "highlights": [
      "1 Bedrooms & 1 Bathrooms (1,680 sq ft)",
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
      "https://regentstorage.blob.core.windows.net/regent-public/c904ccc1b063448bb75c92053bdf5cb5.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/97ac3583ee5145a3a15b093c47ebd147.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/acb48551b4a04261a4db2b12d62abb8e.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/291fecaa56974e459f40e3e97c73f95a.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/e172a7c6fc3941cca816173224b26ed4.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/db1cc71bb2104e02a02e41673f3a66b2.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/a7cf796e33b94198a7f04636320d91e1.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/1f07624416c04f2c96dba876af7b7289.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/73b45eaad60f43ca9ac59a857748980e.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/9749e9073870453d8ac9fa4a792f014b.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/421806f2ef3740ddbdd7a99ae16bf8d5.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/9710298fc063472ba3e42ce932107f71.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/db23126ffd6e414fbf3604a8a546284a.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/df92afc05b02452786a1f029e3bb3dd1.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/bf48cf8bf9334e36be75d2053e7ebe55.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/0c62e52425c94cf9bcc30e7a27eb4c36.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/b8ac16dc109a4281a5dcf6be4799b722.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/be3b9362385847048fde6097bd2ee5f6.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/f412f368b36c40e1a43ab2047c1a18ce.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/1825b83ecc4649f98503f9770609d3ab.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/9ddf1b774682480d831c2693234caeba.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/2b96d3e2d5534955888d3ae931c40f08.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/1d93577bf8bd48e795ad721cf8892186.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/b829b47f03e24ed1b0b95c874b0b8db3.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/38d2f0487cd347f3ad2f19a97e08b137.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/8572be593ea04a728711a8b61a77f8be.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/88ec7098fcdf4a1bab13eed921a5e730.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/d4707a2bdaab4dd5ad9a293ae345e6ba.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/e0a028a7686d4d9099042a768cb677dd.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/0acc5e8cb03f4e8d9adbb383626ff698.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/6cf2d5a4793f44eabd5aa2da524c0c0e.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/16da928871ea4b95b525b23c31528b03.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/687ae48319734495bfac849ae448fc00.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/faeeda9b209a460b8171be21c13a3451.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/4b93a7c7d78b43b8ae5ce7605a12f814.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/b440284c05fc408fb8c4a00e934303aa.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/fa09e44d53a945f3967308dcb327d305.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/4d3d5bc3a22e4ab48905e6f9647e28bd.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/87b0565cbac949308b290c973af7c1b0.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/cbd804e4ff6b4689989e774e4100ee16.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/8dac8f8627bc4a8282591a71ecc5f199.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/2a9f7fd0225047d7b82c823f27bfbf36.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/4560e8fd6baf4c76a5d1db4f518bf12a.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/cf1d983fc4d24a8cbd7e4b2664b2ecbe.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/eba821b1de824c26acacd6c3ef7ff7d9.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/7a12df0fb0d24dc488876c6bdde7fcc4.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/1fa1c37dcb414f1cb51c92ca2cc9bd7b.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/998f1442e4b045dabfe6d71e4f64bf82.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/930eb51bff4c483cbb0fb18b6bc21e8d.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/88ef8387005e4b6dacdf6519c8489435.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/e2c0be7da29445a7b1a1a6459742ee01.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/592eb08bb4f24a73a39741527180ed7d.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/e6742213a30c4de6bf9aa8867f1ca4e1.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/c310019c372f4ab1b0b3685cc459819f.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/06977e62c1bf49b2b96d7dedd60ca49e.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/3bb3d696651c4f8db930e4eaeff05204.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/ffe2e59b4a9b4166ac659ffe86481d54.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/179c16e3d4b54e5e89742aea06e0d1f8.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/53e630b19fb542cd82e11f7d65f518a0.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/3155e3dce76640e799522e04c31000fa.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/da4bf246bde8479aa7f696d6e6104d56.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/887d3b6cbc6c43318289b797415c87eb.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/73d66e6d00504823a8d84970cdbb9084.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/db1b0768485f4181b648106c11d389d8.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/e99cd50290464121bf34c28d4cdbbfb8.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/d4e1da46cee144529cea5123dc4e45d5.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/78f761b6cde442f5910fc9ad1452e2ee.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/3f45d07a753f4461a7076cec252137fb.jpeg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/d0ab1de5715b49679091e5aa76e61385.pdf",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": false,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-cedar-creek-3276h42106",
    "name": "The Cedar Creek 3276H42106",
    "tagline": "Spacious 4-bedroom, 2-bath modular featuring 2,250 sq ft of open living space",
    "sectionType": "Modular",
    "price": 192000,
    "startingEstMonthly": 1075,
    "beds": 4,
    "baths": 2,
    "sqft": 2250,
    "dimensions": "32' x 80'",
    "style": "Craftsman Haven",
    "description": "The The Cedar Creek 3276H42106 is a precision factory-built modular offering 4 bedrooms, 2 bathrooms, and 2,250 sq ft of climate-controlled luxury (32' x 80'). Designed with an open kitchen island, vaulted ceilings, and high-efficiency Energy Star insulation.",
    "highlights": [
      "4 Bedrooms & 2 Bathrooms (2,250 sq ft)",
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
      "https://regentstorage.blob.core.windows.net/regent-public/c6a4693f33304d89b99669f87a5d2f4c.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/efaf359dd7404fa9862f28e536bc969b.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/fcfd0bc32f0e4fa6b3d3dd4783041844.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/0ddeedc7de624b45b753fef0e20b0045.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/3efcc9b02922485ca56d696292e673a9.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/e67e1b4d94a94f94b26a3b9cdd410721.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/4d2b7c0c8a9b43df977274a988491647.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/8e7da3ef5fbb475f9fd381094f1ec5d7.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/7289fe9bbddd46d29f6f6f7284a252a5.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/e359560b0b0342b38bc9c4105746ef40.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/56440798da794c21ba4c1cd3154749ce.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/52812103ca6b45be981a5975663e5c87.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/373f3aa76d6f41edb10478e15a127f2e.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/040ab784d34b4e84a2d4e232ea0bb128.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/11515ac7f4cf468a8baffc7dfa99b017.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/f719a6218d6745e796ac6cb5df3f5003.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/acd12c8fe155446582ef11c4668bf6b9.jpeg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/47496a190e404e9d867b46aa9560e32b.webp",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": false,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-cypress-creek-cottage",
    "name": "The Cypress Creek Cottage",
    "tagline": "Spacious 3-bedroom, 2-bath single-wide featuring 1,080 sq ft of open living space",
    "sectionType": "Single-Wide",
    "price": 82000,
    "startingEstMonthly": 459,
    "beds": 3,
    "baths": 2,
    "sqft": 1080,
    "dimensions": "42' x 58'",
    "style": "Rustic Cottage",
    "description": "The The Cypress Creek Cottage is a precision factory-built single-wide offering 3 bedrooms, 2 bathrooms, and 1,080 sq ft of climate-controlled luxury (42' x 58'). Designed with an open kitchen island, vaulted ceilings, and high-efficiency Energy Star insulation.",
    "highlights": [
      "3 Bedrooms & 2 Bathrooms (1,080 sq ft)",
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
      "https://regentstorage.blob.core.windows.net/regent-public/9d8764a6b08e4a92ba822dd2ef752160.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/732ca7f9a08b4cd0b5bd0add7a68b4f1.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/70b9330320744118a1bb6684a068a49c.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/850b529b5f254b21be3a32500f7507d8.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/551ba7cda5b141108b9d097d249f8cb8.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/3ee205d5f71d4601aa4e7a9ca3c9afd0.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/3ae75aaff62b4f5bbad270c51846b33c.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/6ed32b8ac9c04c9994edb90b1bd5b630.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/a115e4b56af44eb48e3be7daf871dbc6.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/70fbcc2c60764dc598c2c51c15720863.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/f73342c4438643fb8dd35f01fc5d98ec.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/76739909d98e4ed6967399a7afe3efed.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/28daab2f14f641649c61a90920f8b594.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/0dd974037f034d629598302491e930d1.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/6665646c763448bda881147265d8058b.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/cfe40980e8c9479dbdb248ed235e785c.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/bc95a149ba8740539b65649fcc079b91.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/2c149d4cedad433395d7f0bf5001a88e.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/1a5d900942d14fdd85a62736aed5ff51.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/b447194cc72d4856ab18d78220cd1603.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/b1963c1e941b4a1589400a1ba36e2eef.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/36042152fdd94b4d87d27668f1ce62e2.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/c9e5494bd6074d83a9a16c32cde69cce.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/2af9795fc8184b66a8dc7c8fb7768aed.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/61cc939974bf447db003267db33ddffe.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/bf438fda7eba4f8c8372ebfd778a652a.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/692aa695e8b24998a37cec6a4bff97a5.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/74c8901f4a064dacb61b157289872a0a.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/f8975ca02f6b45da834a252b75f1f1a7.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/10b50370c46e457eadded0793f76abdf.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/b376bb559ab743e3bbb7b72f0568f76f.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/3c206f06b4cc43caa43c1b9b56402308.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/f376538b0bab4575b6b0fa345c2851d7.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/f2b1024365e54070bc5ce7ff5a044ec0.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/19409f9054f04e7290f672d16ada1eaa.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/4d44972cc1064b70a2753343756d64db.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/0ecc0fb2afa143519bedc8bb50fdaba3.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/11247de530714be3a58d2e20542ac0cc.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/e03df0329b7d4d459a4bc9733c81a96f.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/aa4f5e2e02124c309d396482eef7a7a4.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/555a5fb6a8614f738d952fc312bae3f6.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/f66d5358bb19475c9ad0b5a95e81b6fa.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/e4c6539bb3b8497a808a2016497da5e6.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/7a36abb739ec42eabe972bdbdc08e348.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/81170ba280b54d0c8f6302443d0e2662.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/170961dd0b7b41c180f111d8ece26a9b.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/8443feaf2a7b48e481313a8be056e1a3.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/65d64cbf274a4bdda093f910a11a6607.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/a3216564f2c548ea991979d0cf552ab0.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/a92ab1b47a944081a18fef8e2e5d948d.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/ba8c4c7486694294a8c9ea66d377833a.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/fe40bcd424c84bb99a3c0c7609082dfb.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/d88a0c9f200144cda645f128fa25e202.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/41b8271dc24e408e82034e0db25aaf8d.jpg"
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
    "tagline": "Spacious 3-bedroom, 2-bath double-wide featuring 1,680 sq ft of open living space",
    "sectionType": "Double-Wide",
    "price": 149000,
    "startingEstMonthly": 834,
    "beds": 3,
    "baths": 2,
    "sqft": 1680,
    "dimensions": "28' x 64'",
    "style": "Craftsman Haven",
    "description": "The The Churchill is a precision factory-built double-wide offering 3 bedrooms, 2 bathrooms, and 1,680 sq ft of climate-controlled luxury (28' x 64'). Designed with an open kitchen island, vaulted ceilings, and high-efficiency Energy Star insulation.",
    "highlights": [
      "3 Bedrooms & 2 Bathrooms (1,680 sq ft)",
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
      "https://regentstorage.blob.core.windows.net/regent-public/3de7e44238d94d9c9e7b108b58743d18.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/52a038ecaa4b4dc2978c99caa2a7f5fb.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/3775940fdef34a28ba83ef45191546ff.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/8c92a531575b41d8b772dfec015a498b.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/93ad8155c32d4168ac4794f23d2d5d67.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/2bf0105408d44534bc8c489d87fe3508.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/7241a58b4aff4b318a428fb76c6d75b8.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/9241ba75aaec43949b202071b2703695.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/3dbbaf568eaa434f963088da537b87ce.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/6966d4f2d7c44e11b71f7303575d7991.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/f4d0e75acf60452fa7cc3450278e9dc2.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/3db82964c7044d6d9131c0fdd7b1b5d2.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/60c053d823704ab88d09ac93bace9656.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/544dd68b6f884a219721164b04a33bca.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/8f89806191c44df28b6768e483e81275.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/8e9f07969f1a4d25879bb3587cba6815.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/b7ae1b2983b345db975b0b6ea6a3c787.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/67b6bc0283034c5caccf39ffbbad1f1b.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/fb3d41237956480ab154189d9b221421.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/a4490b0947d34ed1a01684bb5f4346a5.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/f397df2b05b74047bc0b1971e43349aa.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/0ef190c8575d4b838c26231383dedfb2.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/c2917bfdd84d47f385b19e87871cea71.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/949f104c689349faa7bf01036b8af98b.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/46760b5cd5c34b46854d75289f891de7.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/98aa89a7c14b4a8c996807351a7c0855.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/f16d715871f44cdc84db5fc3b24b94bb.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/11a6c26ed39348afa7fd9c3eaf8af7f9.jpeg",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": true,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-crown",
    "name": "The Crown",
    "tagline": "Spacious 4-bedroom, 2-bath double-wide featuring 1,680 sq ft of open living space",
    "sectionType": "Double-Wide",
    "price": 152000,
    "startingEstMonthly": 851,
    "beds": 4,
    "baths": 2,
    "sqft": 1680,
    "dimensions": "28' x 64'",
    "style": "Southern Elegance",
    "description": "The The Crown is a precision factory-built double-wide offering 4 bedrooms, 2 bathrooms, and 1,680 sq ft of climate-controlled luxury (28' x 64'). Designed with an open kitchen island, vaulted ceilings, and high-efficiency Energy Star insulation.",
    "highlights": [
      "4 Bedrooms & 2 Bathrooms (1,680 sq ft)",
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
      "https://regentstorage.blob.core.windows.net/regent-public/b430fd6f6880483c9f59bb81576b6297.png",
      "https://regentstorage.blob.core.windows.net/regent-public/a793b7126bac4904b2146259960b49c7.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/b1026a316bef4d288a5c51a48a08e422.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/a53874d178ce4171a7d11fd15995de13.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/bd30412d9dc04f54825b621f3736dc9e.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/882a38fd07f8401e9260a607a6480d3e.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/72227a3805ef48cd990ea566122573bc.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/4750c4f423854c5d817f939c7f59e0ef.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/79d264f29d6646829fa9d016e1d5aaf2.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/24098c419aaa4f1c810cdad2fad5a0f1.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/384257cd219a40a997056325ef7c3cfd.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/d6f1030ce21e4c6bb152c0610be44e39.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/faa21e6e5a814a13a1a9e12bc2322f12.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/4acf0583240b481fa4569b5170b56131.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/198be9782759448389091d2174486bd6.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/eb332ffedafc49599b22685bfb8123a4.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/b0efcd7814954d5ba849f51f06dd079c.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/e60ce66697f2473ea2413f3c1ea9bd0f.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/1576da8d04ba4847b47eff75ab70cef9.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/3202d5df2c2145d09fc38f1fccb7d6a8.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/46dddc9aa6854f63bd3e71806d1312a7.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/64d2b4f3d8354a0289d2d39c48f0e05b.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/71eb8d520eb3457497ecc0b4f036b604.webp"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/268ab65c08a746ad891fa9a893578872.jpg",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": false,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-ridge",
    "name": "The Ridge",
    "tagline": "Spacious 3-bedroom, 2-bath double-wide featuring 1,680 sq ft of open living space",
    "sectionType": "Double-Wide",
    "price": 136000,
    "startingEstMonthly": 762,
    "beds": 3,
    "baths": 2,
    "sqft": 1680,
    "dimensions": "28' x 64'",
    "style": "Rustic Cottage",
    "description": "The The Ridge is a precision factory-built double-wide offering 3 bedrooms, 2 bathrooms, and 1,680 sq ft of climate-controlled luxury (28' x 64'). Designed with an open kitchen island, vaulted ceilings, and high-efficiency Energy Star insulation.",
    "highlights": [
      "3 Bedrooms & 2 Bathrooms (1,680 sq ft)",
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
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/f637c6f9d2d849bfa2adb6d865d87c8f.jpg",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": true,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-summit",
    "name": "The Summit",
    "tagline": "Spacious 3-bedroom, 2-bath modular featuring 2,250 sq ft of open living space",
    "sectionType": "Modular",
    "price": 210000,
    "startingEstMonthly": 1176,
    "beds": 3,
    "baths": 2,
    "sqft": 2250,
    "dimensions": "32' x 76'",
    "style": "Minimalist Lodge",
    "description": "The The Summit is a precision factory-built modular offering 3 bedrooms, 2 bathrooms, and 2,250 sq ft of climate-controlled luxury (32' x 76'). Designed with an open kitchen island, vaulted ceilings, and high-efficiency Energy Star insulation.",
    "highlights": [
      "3 Bedrooms & 2 Bathrooms (2,250 sq ft)",
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
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/60967a715fe14de689f5fd98292cf235.jpg",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": false,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-browning",
    "name": "The Browning",
    "tagline": "Spacious 3-bedroom, 2-bath double-wide featuring 1,680 sq ft of open living space",
    "sectionType": "Double-Wide",
    "price": 137500,
    "startingEstMonthly": 770,
    "beds": 3,
    "baths": 2,
    "sqft": 1680,
    "dimensions": "28' x 64'",
    "style": "Modern Farmhouse",
    "description": "The The Browning is a precision factory-built double-wide offering 3 bedrooms, 2 bathrooms, and 1,680 sq ft of climate-controlled luxury (28' x 64'). Designed with an open kitchen island, vaulted ceilings, and high-efficiency Energy Star insulation.",
    "highlights": [
      "3 Bedrooms & 2 Bathrooms (1,680 sq ft)",
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
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/5f6bd11e9fe6491088c38c6f9f09b56c.jpg",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": false,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-remington",
    "name": "The Remington",
    "tagline": "Spacious 3-bedroom, 2-bath double-wide featuring 1,680 sq ft of open living space",
    "sectionType": "Double-Wide",
    "price": 144000,
    "startingEstMonthly": 806,
    "beds": 3,
    "baths": 2,
    "sqft": 1680,
    "dimensions": "28' x 64'",
    "style": "Craftsman Haven",
    "description": "The The Remington is a precision factory-built double-wide offering 3 bedrooms, 2 bathrooms, and 1,680 sq ft of climate-controlled luxury (28' x 64'). Designed with an open kitchen island, vaulted ceilings, and high-efficiency Energy Star insulation.",
    "highlights": [
      "3 Bedrooms & 2 Bathrooms (1,680 sq ft)",
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
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/4b9a842feab742eab72324c3a4d0eede.jpg",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": true,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-paris",
    "name": "The Paris",
    "tagline": "Spacious 3-bedroom, 2-bath modular featuring 2,250 sq ft of open living space",
    "sectionType": "Modular",
    "price": 202000,
    "startingEstMonthly": 1131,
    "beds": 3,
    "baths": 2,
    "sqft": 2250,
    "dimensions": "32' x 64'",
    "style": "Southern Elegance",
    "description": "The The Paris is a precision factory-built modular offering 3 bedrooms, 2 bathrooms, and 2,250 sq ft of climate-controlled luxury (32' x 64'). Designed with an open kitchen island, vaulted ceilings, and high-efficiency Energy Star insulation.",
    "highlights": [
      "3 Bedrooms & 2 Bathrooms (2,250 sq ft)",
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
      "https://regentstorage.blob.core.windows.net/regent-public/36a9d02de8cc4b6d8cb480e1a237b704.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/5645d9caa0f349fb92676b4b320664c2.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/9d9e732acfec4166a8ac9d2c82125a7a.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/c6db5f3fa8b441bb9dfdd7ea5cad22ad.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/27ed2f4fcd0f41d19327d01ad1653d54.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/4d4f0f29d6474a98ad7d7fda73056b6d.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/20cb18545e3f4a77b723106734e8d457.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/315520e85f8547cd8c8c7a5215606bf7.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/35e869ff8a4744a999f49d80b4b9c5a8.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/74ca863cf5b7422daf330feceb86ed25.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/c3c09c8983cd4e3482d6204f8164a298.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/941a0c49ea9342e09f770ddd4b7f5a09.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/4b8eaa4bd9c34163ba946015374c7d1a.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/2457ee12d26b45778b0b0e131d85e085.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/06797455e65e4e7599c3ef9ff45ef2b4.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/6f445c8f75b048988961763bc4e700d4.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/4731bc535c3142fea30e4e9da3a423f5.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/4d0d62d03e584483a47fa4ac3b673db0.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/4962539561e14dd1be0e81c7d2af22de.webp"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/31fe279cfdcb4e0383172e2b1dd19e04.jpg",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": false,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-rosedale",
    "name": "The Rosedale",
    "tagline": "Spacious 3-bedroom, 2-bath modular featuring 2,250 sq ft of open living space",
    "sectionType": "Modular",
    "price": 218000,
    "startingEstMonthly": 1221,
    "beds": 3,
    "baths": 2,
    "sqft": 2250,
    "dimensions": "28' x 60'",
    "style": "Craftsman Haven",
    "description": "The The Rosedale is a precision factory-built modular offering 3 bedrooms, 2 bathrooms, and 2,250 sq ft of climate-controlled luxury (28' x 60'). Designed with an open kitchen island, vaulted ceilings, and high-efficiency Energy Star insulation.",
    "highlights": [
      "3 Bedrooms & 2 Bathrooms (2,250 sq ft)",
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
    "tagline": "Spacious 3-bedroom, 2-bath modular featuring 2,250 sq ft of open living space",
    "sectionType": "Modular",
    "price": 228000,
    "startingEstMonthly": 1277,
    "beds": 3,
    "baths": 2,
    "sqft": 2250,
    "dimensions": "32' x 76'",
    "style": "Minimalist Lodge",
    "description": "The The Forest Manor 3523B is a precision factory-built modular offering 3 bedrooms, 2 bathrooms, and 2,250 sq ft of climate-controlled luxury (32' x 76'). Designed with an open kitchen island, vaulted ceilings, and high-efficiency Energy Star insulation.",
    "highlights": [
      "3 Bedrooms & 2 Bathrooms (2,250 sq ft)",
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
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/24917da3c9394ebe91ddd76a1eaf0d0e.jpg",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": true,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-creole",
    "name": "The Creole",
    "tagline": "Spacious 3-bedroom, 2-bath double-wide featuring 1,680 sq ft of open living space",
    "sectionType": "Double-Wide",
    "price": 146000,
    "startingEstMonthly": 818,
    "beds": 3,
    "baths": 2,
    "sqft": 1680,
    "dimensions": "32' x 60'",
    "style": "Southern Elegance",
    "description": "The The Creole is a precision factory-built double-wide offering 3 bedrooms, 2 bathrooms, and 1,680 sq ft of climate-controlled luxury (32' x 60'). Designed with an open kitchen island, vaulted ceilings, and high-efficiency Energy Star insulation.",
    "highlights": [
      "3 Bedrooms & 2 Bathrooms (1,680 sq ft)",
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
      "https://regentstorage.blob.core.windows.net/regent-public/53ecd5a9b38b4e8d870d69fdef392f9e.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/ab0ac5bf93044f3aa562bb6718c2b703.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/a2465c8449224dc19ff93a13b7567b74.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/cc60882130d94793ab995faeddf7a472.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/af30468d42b14e8ca28d44bae18502c7.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/b4bff17f245f49ea9a9ed775458ade97.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/a60ca71980604311aa9708d31610c78b.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/168152e92ce7464e91eefdcf9e61764c.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/6601e04e29584d1eb58b52f0e56cf35e.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/3c673e0fe9eb400a8c252fcd53a8b36b.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/918752f7efe1492081c07bb9c82b3e80.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/241a4f38c0b34e49a0c1f1ee3c92393a.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/d3ce0c19592d45468e0bfedc469a4a4e.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/3dcc552514dd4e4da9f5c695a6ba294b.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/751089b200c44c2f9572abf9dfd430c9.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/bde7332883bf4c6893d8ea123ccc65b8.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/bbe331edd3794e3c94a2f47a2cfb308a.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/967b4acb1b6e4fcf8612dfac90be1431.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/f3e289809886456caaf412c28ebe8989.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/a0eb62ee44474499b64730a939b998aa.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/2e7994107d4f4e90ac7364d9be88392c.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/e2cfed259a644af6823f65ef39b3350c.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/0eb2cd8283ff428cbf4a3fce1610b2d5.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/526c6cd9273d42d28dd8666eb64b9e48.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/22cf9d36881a42f895a3e2d483fd543d.webp",
      "https://regentstorage.blob.core.windows.net/regent-public/56419a7244b54de88f7fd970038203f9.webp"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/bf302657147f4eafb9c4eea1ab1a35b7.jpg",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": false,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-dauphine",
    "name": "The Dauphine",
    "tagline": "Spacious 3-bedroom, 2-bath double-wide featuring 1,680 sq ft of open living space",
    "sectionType": "Double-Wide",
    "price": 149500,
    "startingEstMonthly": 837,
    "beds": 3,
    "baths": 2,
    "sqft": 1680,
    "dimensions": "28' x 64'",
    "style": "Southern Elegance",
    "description": "The The Dauphine is a precision factory-built double-wide offering 3 bedrooms, 2 bathrooms, and 1,680 sq ft of climate-controlled luxury (28' x 64'). Designed with an open kitchen island, vaulted ceilings, and high-efficiency Energy Star insulation.",
    "highlights": [
      "3 Bedrooms & 2 Bathrooms (1,680 sq ft)",
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
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/6dad74bc49b641718bd7d3f2fa18a7e7.png",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": true,
    "isBestSeller": false,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-tulane",
    "name": "The Tulane",
    "tagline": "Spacious 3-bedroom, 2-bath double-wide featuring 1,680 sq ft of open living space",
    "sectionType": "Double-Wide",
    "price": 151000,
    "startingEstMonthly": 846,
    "beds": 3,
    "baths": 2,
    "sqft": 1680,
    "dimensions": "16' x 80'",
    "style": "Modern Farmhouse",
    "description": "The The Tulane is a precision factory-built double-wide offering 3 bedrooms, 2 bathrooms, and 1,680 sq ft of climate-controlled luxury (16' x 80'). Designed with an open kitchen island, vaulted ceilings, and high-efficiency Energy Star insulation.",
    "highlights": [
      "3 Bedrooms & 2 Bathrooms (1,680 sq ft)",
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
      "https://regentstorage.blob.core.windows.net/regent-public/6c2a6146269743488ad8159c9a2bad44.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/710beb507f564097a51fe886ad3e3e62.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/a3f128f402ff4817a7a439b9ba7ef905.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/36224b2a2af245c69bafd197a3098512.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/237fb56c3f004a32a89717d1158d8d32.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/5319ba8b889f4f5487bbc39e14cbcd61.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/54ef3eb5e014471188a048cb97f4b744.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/5f672f939ebc47b9a6983e385ad66b69.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/48a9ce5555ff4c8dbb1f7195ecf6f86f.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/8adacab01893405983eea58d510df3a2.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/585c31e33361485c8e535b8b93a88ff1.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/d9d3e671a50b49bb82b4a8a232f86db9.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/45fd439aa4b1407c990d55b24169cd61.jpeg",
      "https://regentstorage.blob.core.windows.net/regent-public/57d6e3c6b44b4b08825ae372b685b690.jpeg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/11a6c26ed39348afa7fd9c3eaf8af7f9.jpeg",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": true,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-ascent",
    "name": "The Ascent",
    "tagline": "Spacious 4-bedroom, 2-bath modular featuring 2,250 sq ft of open living space",
    "sectionType": "Modular",
    "price": 195000,
    "startingEstMonthly": 1092,
    "beds": 4,
    "baths": 2,
    "sqft": 2250,
    "dimensions": "28' x 72'",
    "style": "Modern Farmhouse",
    "description": "The The Ascent is a precision factory-built modular offering 4 bedrooms, 2 bathrooms, and 2,250 sq ft of climate-controlled luxury (28' x 72'). Designed with an open kitchen island, vaulted ceilings, and high-efficiency Energy Star insulation.",
    "highlights": [
      "4 Bedrooms & 2 Bathrooms (2,250 sq ft)",
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
      "https://regentstorage.blob.core.windows.net/regent-public/05be242cb2b842f8ac36d6a1294d4f9c.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/e471b0aa1f904666afb4d7fcfcd537df.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/61e2999ec2bb4553b6776967b69cdf5a.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/cc83d19c8a0143a6a1e3b568956acb84.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/04b561663ef74439a5650da341d4af34.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/7ddca43a6e5e47ed82e44a1c93257920.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/76a62eb348954e6d8e0afe2000688f3e.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/d960b2b095614d84a6913fdffdbc0067.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/c8533a3728634a4796ef2c2411df324c.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/27beb9e20977400d9c3138059bfa07b0.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/83dca028fede48cdb877c0f96c71038e.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/c7fefda96ead43868e8b4c50bcc5efea.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/3ffa1f9bb6984e739e2d7ec88a1a5be7.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/c161140f322a44059caa998190fd88de.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/5e7ac3f9bf4a4a6eb8b5c6c85feafae4.jpg",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": false,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-hudson",
    "name": "The Hudson",
    "tagline": "Spacious 3-bedroom, 2-bath modular featuring 2,250 sq ft of open living space",
    "sectionType": "Modular",
    "price": 208000,
    "startingEstMonthly": 1165,
    "beds": 3,
    "baths": 2,
    "sqft": 2250,
    "dimensions": "16' x 80'",
    "style": "Craftsman Haven",
    "description": "The The Hudson is a precision factory-built modular offering 3 bedrooms, 2 bathrooms, and 2,250 sq ft of climate-controlled luxury (16' x 80'). Designed with an open kitchen island, vaulted ceilings, and high-efficiency Energy Star insulation.",
    "highlights": [
      "3 Bedrooms & 2 Bathrooms (2,250 sq ft)",
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
      "https://regentstorage.blob.core.windows.net/regent-public/dce6af5cc26f430aa83dd9dc8771a1d6.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/07a66f7270a8472bb5317fb17bb5f827.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/441d4b1dd2974426976fcc4f6448db84.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/198e298a92894dd6835d8905f6e3d530.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/926c58ac5073464d9e87165b4c638a2f.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/df71075667fe4d56960bf7a23edbf1df.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/eb0afa51058f420eb5ea5d77ea91bfff.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/ed2432467c154c7b86099849163bd9d0.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/3195ae9630bd476a9f2dce91e2a5be9b.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/e34197c2a53a4244927f3bba01e53795.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/d4355850c47c4be2a080c5a0c1941d47.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/0bc0f919e32946ad9bb970547826aedb.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/59c629c6fd59445e8b251099a9807c12.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/c7bd516b820e498d9e27f9810f81de48.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/6ce39051f52f465b80976d8993a0c4f8.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/f0ac4c5d5f4c4e28924e122d59284bd5.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/0eaa81dd7d0b417e9aacf2a66c8a1e58.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/7159cd37302640a6ac855cf811ac93a4.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/557d853900ac46d6b338037af283b9f3.jpg",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": true,
    "isBestSeller": true,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-shoreline",
    "name": "The Shoreline",
    "tagline": "Spacious 4-bedroom, 2-bath modular featuring 2,250 sq ft of open living space",
    "sectionType": "Modular",
    "price": 212000,
    "startingEstMonthly": 1187,
    "beds": 4,
    "baths": 2,
    "sqft": 2250,
    "dimensions": "32' x 76'",
    "style": "Southern Elegance",
    "description": "The The Shoreline is a precision factory-built modular offering 4 bedrooms, 2 bathrooms, and 2,250 sq ft of climate-controlled luxury (32' x 76'). Designed with an open kitchen island, vaulted ceilings, and high-efficiency Energy Star insulation.",
    "highlights": [
      "4 Bedrooms & 2 Bathrooms (2,250 sq ft)",
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
      "https://regentstorage.blob.core.windows.net/regent-public/eab000d8e3e74486b92bb63005cce609.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/7d5b60e2b21a41d4b3c83d363ce136a2.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/1dde7d4307b44613b1c881b5f6131ce1.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/e9ed36c8a0734bcca3d1eda7e07e8a89.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/9c7908f814484e8b961f319cd1f92648.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/3eaf44199ab9430e836b1f3c8cc9a662.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/e986a5d55586424bbac9970dcbfc9823.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/ca78ac93c38d4bf4a15e1fb0941eab21.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/392001492158463fa0d107a02e7a34f1.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/a1cf179438734d9e9608da7e8d2e2b90.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/0dd16ff41c2740ae8e2f14586e242317.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/5d94047045f4483da200ed73172f9278.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/06d25354eb2943d0b377948a987a3400.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/173473b88f7a4f138634b20916b8bc27.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/e3e6aa3b41ce4a85a47b7bc1b4431cf8.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/17abf8e5470d4f1ab6a7cad2a09629b4.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/007fdfb108ca46b1b61ee80fac5cc7a3.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/1a0032c822274fa08988effb22d5adc9.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/be3c3160ea704640b8bb901781f0ce37.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/ac8babe0105f45e380ea3d9f259695f7.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/b4682086c98a450986801b9c443a404e.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/e6a7815b08f543808eafab443f5cc70d.png",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": false,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-bayshore",
    "name": "The Bayshore",
    "tagline": "Spacious 2-bedroom, 2-bath double-wide featuring 1,680 sq ft of open living space",
    "sectionType": "Double-Wide",
    "price": 133000,
    "startingEstMonthly": 745,
    "beds": 2,
    "baths": 2,
    "sqft": 1680,
    "dimensions": "28' x 64'",
    "style": "Southern Elegance",
    "description": "The The Bayshore is a precision factory-built double-wide offering 2 bedrooms, 2 bathrooms, and 1,680 sq ft of climate-controlled luxury (28' x 64'). Designed with an open kitchen island, vaulted ceilings, and high-efficiency Energy Star insulation.",
    "highlights": [
      "2 Bedrooms & 2 Bathrooms (1,680 sq ft)",
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
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/677cd922fea5472a9f6777118bf2e081.png",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": false,
    "isBestSeller": true,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-boulder",
    "name": "The Boulder",
    "tagline": "Spacious 3-bedroom, 2-bath modular featuring 2,250 sq ft of open living space",
    "sectionType": "Modular",
    "price": 199000,
    "startingEstMonthly": 1114,
    "beds": 3,
    "baths": 2,
    "sqft": 2250,
    "dimensions": "32' x 60'",
    "style": "Minimalist Lodge",
    "description": "The The Boulder is a precision factory-built modular offering 3 bedrooms, 2 bathrooms, and 2,250 sq ft of climate-controlled luxury (32' x 60'). Designed with an open kitchen island, vaulted ceilings, and high-efficiency Energy Star insulation.",
    "highlights": [
      "3 Bedrooms & 2 Bathrooms (2,250 sq ft)",
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
      "https://regentstorage.blob.core.windows.net/regent-public/23ef789dad37443a8cd4d810a63e6499.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/ce991372eaf54de6948d417904267e16.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/56e5940c4fb5432f935f2d84dffddeae.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/d83b2102bccc45c890575c17843d83ae.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/9bb2ef9859ce4a3fb2d465bb647f4824.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/9897a204b8d04fb7a35c4373e6eba4a5.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/fb5efd3521344368be6d61e66688f9e9.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/8e5ea9d1bde045a1abf9138d2a3b9243.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/e180f04e723745c1821dbd1204a706cb.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/1a564edc1be34cab95ead79f9868e150.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/c3764670775640a9ad4f865e7c582f89.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/ea96fae49c484f588d80948f3c4ee783.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/4c53401c1e024b23b1747b3b3af9205f.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/847f4cca5eb34e178f263f080a951773.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/b319c158c1894227ab01547db735cdfd.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/ee4b87ab9a2f40f4957b0df0ce3a6658.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/b7182f6962804f64a7788193342d333d.jpg"
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
    "tagline": "Spacious 3-bedroom, 2-bath modular featuring 2,250 sq ft of open living space",
    "sectionType": "Modular",
    "price": 222000,
    "startingEstMonthly": 1243,
    "beds": 3,
    "baths": 2,
    "sqft": 2250,
    "dimensions": "32' x 76'",
    "style": "Craftsman Haven",
    "description": "The The Montana is a precision factory-built modular offering 3 bedrooms, 2 bathrooms, and 2,250 sq ft of climate-controlled luxury (32' x 76'). Designed with an open kitchen island, vaulted ceilings, and high-efficiency Energy Star insulation.",
    "highlights": [
      "3 Bedrooms & 2 Bathrooms (2,250 sq ft)",
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
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/22d9130a21974cc5bddcd7c5684c9725.jpg",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": true,
    "isBestSeller": false,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-ashbank",
    "name": "The Ashbank",
    "tagline": "Spacious 3-bedroom, 2-bath double-wide featuring 1,680 sq ft of open living space",
    "sectionType": "Double-Wide",
    "price": 139500,
    "startingEstMonthly": 781,
    "beds": 3,
    "baths": 2,
    "sqft": 1680,
    "dimensions": "16' x 80'",
    "style": "Modern Farmhouse",
    "description": "The The Ashbank is a precision factory-built double-wide offering 3 bedrooms, 2 bathrooms, and 1,680 sq ft of climate-controlled luxury (16' x 80'). Designed with an open kitchen island, vaulted ceilings, and high-efficiency Energy Star insulation.",
    "highlights": [
      "3 Bedrooms & 2 Bathrooms (1,680 sq ft)",
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
      "https://regentstorage.blob.core.windows.net/regent-public/6a45242a86b74a248bb23c6f247ea72e.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/cf065cf7ea9f4493a7970a611a50c99d.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/776ff76095e645f5bb2a31bc255b6c13.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/45852d2b74454e3e831ac697f188b65e.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/8934aca2e3494016afd2e825338eb271.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/5951f0d5e89d4a03b4af59448f394b54.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/8c07894c747143d0b7e78a49f99f5fd7.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/a7627747268a43578b30ea998e7214da.png",
      "https://regentstorage.blob.core.windows.net/regent-public/f393aebad15744a08d5898b3012f3380.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/faf0a9c400da48fc859323c0ed798ae4.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/6d6e78a708ac4ba2bad1987a7c15a10f.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/017d0d2b91b94776bdb7afaac7f3014b.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/573ea3e40fac4330b0395f5a00894bee.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/762b059063504c7ba70e3152aa62aea4.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/f0ef8a0855a0483894de9e4127694778.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/1e66f7f1522241da91b54aa53dbd4664.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/c1f2e8e55ce8421aaa0db8d3fd43fb8c.jpg",
      "https://regentstorage.blob.core.windows.net/regent-public/67c7ac5bc435496cb95d311fbe37615b.jpg"
    ],
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/a7941a7ea41b4c43bee32ca3dc3f39e5.jpg",
    "virtualTour3dUrl": "https://my.matterport.com/show/?m=sample",
    "isFeatured": true,
    "isBestSeller": false,
    "isTurnkeyReady": true,
    "customizations": []
  },
  {
    "id": "the-sanibel",
    "name": "The Sanibel",
    "tagline": "Spacious 2-bedroom, 2-bath double-wide featuring 1,680 sq ft of open living space",
    "sectionType": "Double-Wide",
    "price": 147000,
    "startingEstMonthly": 823,
    "beds": 2,
    "baths": 2,
    "sqft": 1680,
    "dimensions": "28' x 64'",
    "style": "Southern Elegance",
    "description": "The The Sanibel is a precision factory-built double-wide offering 2 bedrooms, 2 bathrooms, and 1,680 sq ft of climate-controlled luxury (28' x 64'). Designed with an open kitchen island, vaulted ceilings, and high-efficiency Energy Star insulation.",
    "highlights": [
      "2 Bedrooms & 2 Bathrooms (1,680 sq ft)",
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
    "floorPlanUrl": "https://regentstorage.blob.core.windows.net/regent-public/700bdba3c44f43f0bede53b4fb4a02f6.jpg",
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
    "id": "rev-1",
    "author": "The Miller Family",
    "location": "Byram, MS",
    "homeModel": "The Basecamp Lodge (Double-Wide)",
    "rating": 5,
    "title": "Building on our inherited family land was seamless and stress-free!",
    "quote": "We inherited 4 acres of family land in Hinds County. Traditional site builders gave us quotes exceeding 40,000 with a 14-month wait time. When we stepped into the display center in Byram, we fell in love with the Basecamp Lodge layout. From site prep to key handover, it took just 6 weeks. Our power bill in July was 24 despite 95-degree heat thanks to the Energy Star insulation package.",
    "avatarUrl": "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&w=600&q=80",
    "verified": true,
    "purchaseYear": "2024"
  },
  {
    "id": "rev-2",
    "author": "Marcus & Brenda Vance",
    "location": "Cullman, AL",
    "homeModel": "The Woodside (Modular Estate)",
    "rating": 4,
    "title": "Solid build quality—delivery had a minor 1-week rain delay.",
    "quote": "After 28 years in our old single-wide, we decided to upgrade to a 4-bedroom modular home for our growing grandkids. The climate-controlled factory construction quality is rock solid—walls are sturdy and well insulated. Initial factory transport was delayed by a week due to heavy spring rain, but seeing our grandkids run down the hallway on move-in day made it all worth it.",
    "avatarUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "verified": true,
    "purchaseYear": "2024"
  },
  {
    "id": "rev-3",
    "author": "Sarah & Dave Jenkins",
    "location": "Waco, TX",
    "homeModel": "The Englewood Farmhouse (Single-Wide)",
    "rating": 5,
    "title": "Cheaper than apartment rent and we finally own our land!",
    "quote": "As a young couple buying our first home, we were terrified of getting stuck in an endless rent cycle. The Waco display center team walked us through every single step, from utility hookups to septic permits. The board-and-batten siding looks like a custom architectural home, and our monthly home expenses are actually lower than our old 1-bedroom apartment rent!",
    "avatarUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    "verified": true,
    "purchaseYear": "2024"
  },
  {
    "id": "rev-4",
    "author": "Pastor Thomas & Evelyn Reed",
    "location": "Monroe, LA",
    "homeModel": "The Pinnacle Estate (Double-Wide)",
    "rating": 4,
    "title": "Great space for our family—minor trim fix handled quickly under warranty.",
    "quote": "We needed a 5-bedroom home to accommodate our large family and church gatherings. The double master suite layout and walk-in pantry fit our lifestyle perfectly. Delivery through narrow rural roads was handled carefully. We had a minor pantry door trim alignment issue on setup day, but the regional service team repaired it promptly within 48 hours.",
    "avatarUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    "verified": true,
    "purchaseYear": "2023"
  },
  {
    "id": "rev-5",
    "author": "Clara & Ray Montgomery",
    "location": "Dothan, AL",
    "homeModel": "The Delashaw Cottage (Double-Wide)",
    "rating": 4,
    "title": "Wonderful retirement home with our custom front porch.",
    "quote": "Downsizing after retirement was daunting, but the team made it very straightforward. We customized our home with an extended covered front porch where we sit every morning with coffee. Wish the custom cabinet selection had one more dark walnut stain choice, but the quality of the home and the 10-year warranty give us great peace of mind.",
    "avatarUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
    "verified": true,
    "purchaseYear": "2024"
  },
  {
    "id": "rev-6",
    "author": "Dr. Aris & Elena Thorne",
    "location": "Hattiesburg, MS",
    "homeModel": "The Sky Harbor 3.0 (Modular)",
    "rating": 5,
    "title": "As a civil engineer, I inspected the framing—it easily exceeds site-built standards.",
    "quote": "I’m a civil engineer, so I inspected the steel frame chassis, floor joist spacing, and thermal envelope under extreme scrutiny. Factory-controlled modular construction is vastly superior to site-built homes exposed to humidity during construction. Zero drywall settling cracks after a full year of living here.",
    "avatarUrl": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
    "verified": true,
    "purchaseYear": "2023"
  },
  {
    "id": "rev-7",
    "author": "Hannah & Brandon Cole",
    "location": "Hammond, LA",
    "homeModel": "The Pip (Single-Wide)",
    "rating": 3,
    "title": "Beautiful compact home, though parish utility permits took longer than expected.",
    "quote": "The home layout and craftsmanship are wonderful for our rural parcel near Hammond. Zero wasted hallway space. However, local parish utility inspection permits dragged on for 3 extra weeks before power could be turned on. The home itself is solid and comfortable, but plan extra buffer time for local municipal utility approvals.",
    "avatarUrl": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    "verified": true,
    "purchaseYear": "2024"
  },
  {
    "id": "rev-8",
    "author": "Greg & Melissa Henderson",
    "location": "Baldwin County, AL",
    "homeModel": "The Marsh Ridge Coastal (Double-Wide)",
    "rating": 4,
    "title": "Survived coastal storms with zero damage—Wind Zone 2 certified!",
    "quote": "Living near the Gulf Coast in Baldwin County meant Wind Zone 2 construction was mandatory. The coastal reinforced siding and heavy tie-down anchor system exceeded county building codes easily. We survived storm season with zero roof damage. A small paint scuff occurred on the front door during highway transport, which was repainted on installation day.",
    "avatarUrl": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80",
    "verified": true,
    "purchaseYear": "2023"
  }
];

