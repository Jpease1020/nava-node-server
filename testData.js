const mockData = [
    {
        "ein": 42988134,
        "company_name": "MCNAMARA/SALVIA, INC.",
        "plan_year": 2019,
        "employee_count": 141,
        "company_state": "MA",
        "premium_sum": 1857676,
        "broker_commission_sum": 11125,
        "participants_sum": 132
    },
    {
        "ein": 42992161,
        "company_name": "MORTGAGE NETWORK, INC.",
        "plan_year": 2019,
        "employee_count": 238,
        "company_state": "MA",
        "premium_sum": 4250222,
        "broker_commission_sum": 137254,
        "participants_sum": 550
    },
    {
        "ein": 42992161,
        "company_name": "MORTGAGE NETWORK, INC.",
        "plan_year": 2018,
        "employee_count": 296,
        "company_state": "MA",
        "premium_sum": 4678129,
        "broker_commission_sum": 151169,
        "participants_sum": 658
    },
    {
        "ein": 43000119,
        "company_name": "FEENEY BROTHERS EXCAVATION, LLC",
        "plan_year": 2019,
        "employee_count": 726,
        "company_state": "MA",
        "premium_sum": 5326985,
        "broker_commission_sum": 35534,
        "participants_sum": 1172
    },
    {
        "ein": 43000317,
        "company_name": "GLYNN ELECTRIC, INC.",
        "plan_year": 2019,
        "employee_count": 252,
        "company_state": "MA",
        "premium_sum": 1539242,
        "broker_commission_sum": 37798,
        "participants_sum": 305
    },
    {
        "ein": 43009415,
        "company_name": "MATOUK TEXTILE WORKS, INC.",
        "plan_year": 2019,
        "employee_count": 128,
        "company_state": "MA",
        "premium_sum": 1235052,
        "broker_commission_sum": 32153,
        "participants_sum": 171
    },
    {
        "ein": 43013630,
        "company_name": "MANAGEMENT OF TRANSPORTATION SERVICES, INC.",
        "plan_year": 2019,
        "employee_count": 128,
        "company_state": "MA",
        "premium_sum": 1699157,
        "broker_commission_sum": 52653,
        "participants_sum": 186
    },
    {
        "ein": 43013630,
        "company_name": "MANAGEMENT OF TRANSPORTATION SERVICES, INC.",
        "plan_year": 2018,
        "employee_count": 136,
        "company_state": "MA",
        "premium_sum": 1604575,
        "broker_commission_sum": 35060,
        "participants_sum": 184
    },
    {
        "ein": 43013630,
        "company_name": "MANAGEMENT OF TRANSPORTATION SERVICES, INC.",
        "plan_year": 2017,
        "employee_count": 144,
        "company_state": "MA",
        "premium_sum": 1414240,
        "broker_commission_sum": 29125,
        "participants_sum": 192
    },
    {
        "ein": 43015339,
        "company_name": "BRANDON RESIDENTIAL TREATMENT",
        "plan_year": 2019,
        "employee_count": 138,
        "company_state": "MA",
        "premium_sum": 973491,
        "broker_commission_sum": 10920,
        "participants_sum": 140
    },
    {
        "ein": 43015339,
        "company_name": "BRANDON RESIDENTIAL TREATMENT",
        "plan_year": 2018,
        "employee_count": 138,
        "company_state": "MA",
        "premium_sum": 845302,
        "broker_commission_sum": 27995,
        "participants_sum": 138
    },
    {
        "ein": 43015339,
        "company_name": "BRANDON RESIDENTIAL TREATMENT",
        "plan_year": 2017,
        "employee_count": 92,
        "company_state": "MA",
        "premium_sum": 681520,
        "broker_commission_sum": 23847,
        "participants_sum": 132
    },
    {
        "ein": 43016479,
        "company_name": "NATIONAL NONWOVENS, INC.",
        "plan_year": 2019,
        "employee_count": 89,
        "company_state": "MA",
        "premium_sum": 988318,
        "broker_commission_sum": 25089,
        "participants_sum": 90
    },
    {
        "ein": 43016479,
        "company_name": "NATIONAL NONWOVENS, INC.",
        "plan_year": 2018,
        "employee_count": 93,
        "company_state": "MA",
        "premium_sum": 809856,
        "broker_commission_sum": 21908,
        "participants_sum": 105
    },
    {
        "ein": 43016479,
        "company_name": "NATIONAL NONWOVENS, INC.",
        "plan_year": 2017,
        "employee_count": 66,
        "company_state": "MA",
        "premium_sum": 687844,
        "broker_commission_sum": 17208,
        "participants_sum": 113
    },
    {
        "ein": 43017184,
        "company_name": "BEACON RESIDENTIAL MANAGEMENT LIMITED PARTNERSHIP",
        "plan_year": 2019,
        "employee_count": 656,
        "company_state": "MA",
        "premium_sum": 5659225,
        "broker_commission_sum": 78643,
        "participants_sum": 880
    },
    {
        "ein": 43017184,
        "company_name": "BEACON RESIDENTIAL MANAGEMENT LIMITED PARTNERSHIP",
        "plan_year": 2018,
        "employee_count": 679,
        "company_state": "MA",
        "premium_sum": 5546374,
        "broker_commission_sum": 62801,
        "participants_sum": 869
    },
    {
        "ein": 43017184,
        "company_name": "BEACON RESIDENTIAL MANAGEMENT LIMITED PARTNERSHIP",
        "plan_year": 2017,
        "employee_count": 479,
        "company_state": "MA",
        "premium_sum": 3922778,
        "broker_commission_sum": 60152,
        "participants_sum": 726
    },
    {
        "ein": 43017601,
        "company_name": "TRIUMVIRATE ENVIRONMENTAL INC.",
        "plan_year": 2018,
        "employee_count": 588,
        "company_state": "MA",
        "premium_sum": 2519,
        "broker_commission_sum": 101,
        "participants_sum": 7
    },
    {
        "ein": 43017601,
        "company_name": "TRIUMVIRATE ENVIRONMENTAL INC.",
        "plan_year": 2017,
        "employee_count": 602,
        "company_state": "MA",
        "premium_sum": 2558,
        "broker_commission_sum": 102,
        "participants_sum": 8
    },
    {
        "ein": 43017622,
        "company_name": "AXIS COMMUNICATIONS INC.",
        "plan_year": 2018,
        "employee_count": 307,
        "company_state": "MA",
        "premium_sum": 3624772,
        "broker_commission_sum": 53257,
        "participants_sum": 668
    },
    {
        "ein": 43017622,
        "company_name": "AXIS COMMUNICATIONS INC.",
        "plan_year": 2017,
        "employee_count": 267,
        "company_state": "MA",
        "premium_sum": 3012468,
        "broker_commission_sum": 56782,
        "participants_sum": 584
    },
    {
        "ein": 43017831,
        "company_name": "AGRU/AMERICA, INC.",
        "plan_year": 2017,
        "employee_count": 209,
        "company_state": "SC",
        "premium_sum": 1999760,
        "broker_commission_sum": 80488,
        "participants_sum": 210
    },
    {
        "ein": 43028678,
        "company_name": "BETTER COMMUNITY LIVING, INC.",
        "plan_year": 2019,
        "employee_count": 122,
        "company_state": "MA",
        "premium_sum": 524282,
        "broker_commission_sum": 20344,
        "participants_sum": 53
    },
    {
        "ein": 43028678,
        "company_name": "BETTER COMMUNITY LIVING, INC.",
        "plan_year": 2018,
        "employee_count": 123,
        "company_state": "MA",
        "premium_sum": 450154,
        "broker_commission_sum": 19672,
        "participants_sum": 51
    },
    {
        "ein": 43028678,
        "company_name": "BETTER COMMUNITY LIVING, INC.",
        "plan_year": 2017,
        "employee_count": 126,
        "company_state": "MA",
        "premium_sum": 565506,
        "broker_commission_sum": 16716,
        "participants_sum": 53
    },
    {
        "ein": 43030234,
        "company_name": "AMERICA WORKS OF NEW YORK, INC.",
        "plan_year": 2019,
        "employee_count": 188,
        "company_state": "NY",
        "premium_sum": 1515888,
        "broker_commission_sum": 70825,
        "participants_sum": 362
    },
    {
        "ein": 43030234,
        "company_name": "AMERICA WORKS OF NEW YORK, INC.",
        "plan_year": 2018,
        "employee_count": 171,
        "company_state": "NY",
        "premium_sum": 1453313,
        "broker_commission_sum": 57810,
        "participants_sum": 171
    },
    {
        "ein": 43030234,
        "company_name": "AMERICA WORKS OF NEW YORK, INC.",
        "plan_year": 2017,
        "employee_count": 186,
        "company_state": "NY",
        "premium_sum": 1111509,
        "broker_commission_sum": 43888,
        "participants_sum": 186
    },
    {
        "ein": 43033516,
        "company_name": "DFF CORPORATION",
        "plan_year": 2019,
        "employee_count": 155,
        "company_state": "MA",
        "premium_sum": 412897,
        "broker_commission_sum": 6293,
        "participants_sum": 135
    },
    {
        "ein": 43033516,
        "company_name": "DFF CORPORATION",
        "plan_year": 2018,
        "employee_count": 167,
        "company_state": "MA",
        "premium_sum": 355818,
        "broker_commission_sum": 6064,
        "participants_sum": 160
    },
    {
        "ein": 43033516,
        "company_name": "DFF CORPORATION",
        "plan_year": 2017,
        "employee_count": 146,
        "company_state": "MA",
        "premium_sum": 394336,
        "broker_commission_sum": 5798,
        "participants_sum": 144
    },
    {
        "ein": 43034257,
        "company_name": "EMOND PLUMBING AND HEATING, INC.",
        "plan_year": 2019,
        "employee_count": 166,
        "company_state": "MA",
        "premium_sum": 739544,
        "broker_commission_sum": 18253,
        "participants_sum": 158
    },
    {
        "ein": 43034257,
        "company_name": "EMOND PLUMBING AND HEATING, INC.",
        "plan_year": 2017,
        "employee_count": 136,
        "company_state": "MA",
        "premium_sum": 695228,
        "broker_commission_sum": 23885,
        "participants_sum": 170
    },
    {
        "ein": 43034522,
        "company_name": "COMMONWEALTH FLATS DEVELOPMENT CORP.",
        "plan_year": 2019,
        "employee_count": 350,
        "company_state": "MA",
        "premium_sum": 3906283,
        "broker_commission_sum": 117415,
        "participants_sum": 650
    },
    {
        "ein": 43034522,
        "company_name": "COMMONWEALTH FLATS DEVELOPMENT CORP.",
        "plan_year": 2018,
        "employee_count": 351,
        "company_state": "MA",
        "premium_sum": 3359269,
        "broker_commission_sum": 100677,
        "participants_sum": 170
    },
    {
        "ein": 43034522,
        "company_name": "COMMONWEALTH FLATS DEVELOPMENT CORP.",
        "plan_year": 2017,
        "employee_count": 358,
        "company_state": "MA",
        "premium_sum": 3834475,
        "broker_commission_sum": 58605,
        "participants_sum": 692
    },
    {
        "ein": 43035105,
        "company_name": "ROAD TO RESPONSIBILITY",
        "plan_year": 2017,
        "employee_count": 342,
        "company_state": "MA",
        "premium_sum": 2881482,
        "broker_commission_sum": 48504,
        "participants_sum": 438
    },
    {
        "ein": 43038356,
        "company_name": "ACTON MEDICAL ASSOCIATES, P. C.",
        "plan_year": 2019,
        "employee_count": 167,
        "company_state": "MA",
        "premium_sum": 996614,
        "broker_commission_sum": 29899,
        "participants_sum": 170
    },
    {
        "ein": 43038356,
        "company_name": "ACTON MEDICAL ASSOCIATES, P. C.",
        "plan_year": 2018,
        "employee_count": 172,
        "company_state": "MA",
        "premium_sum": 1001951,
        "broker_commission_sum": 24810,
        "participants_sum": 172
    },
    {
        "ein": 43038356,
        "company_name": "ACTON MEDICAL ASSOCIATES, P. C.",
        "plan_year": 2017,
        "employee_count": 171,
        "company_state": "MA",
        "premium_sum": 853715,
        "broker_commission_sum": 22351,
        "participants_sum": 171
    },
    {
        "ein": 43039129,
        "company_name": "VERTEX PHARMACEUTICALS INCORPORATED",
        "plan_year": 2019,
        "employee_count": 2302,
        "company_state": "MA",
        "premium_sum": 131385,
        "broker_commission_sum": 0,
        "participants_sum": 22
    },
    {
        "ein": 43039129,
        "company_name": "VERTEX PHARMACEUTICALS INCORPORATED",
        "plan_year": 2018,
        "employee_count": 2105,
        "company_state": "MA",
        "premium_sum": 153001,
        "broker_commission_sum": 0,
        "participants_sum": 24
    },
    {
        "ein": 43039129,
        "company_name": "VERTEX PHARMACEUTICALS INCORPORATED",
        "plan_year": 2017,
        "employee_count": 1757,
        "company_state": "MA",
        "premium_sum": 116730,
        "broker_commission_sum": 0,
        "participants_sum": 21
    },
    {
        "ein": 43039602,
        "company_name": "WINSTON BROTHERS, INC.",
        "plan_year": 2019,
        "employee_count": 94,
        "company_state": "MA",
        "premium_sum": 1269503,
        "broker_commission_sum": 17267,
        "participants_sum": 151
    },
    {
        "ein": 43039602,
        "company_name": "WINSTON BROTHERS, INC.",
        "plan_year": 2018,
        "employee_count": 191,
        "company_state": "MA",
        "premium_sum": 1405726,
        "broker_commission_sum": 42309,
        "participants_sum": 231
    },
    {
        "ein": 43039602,
        "company_name": "WINSTON BROTHERS, INC.",
        "plan_year": 2017,
        "employee_count": 220,
        "company_state": "MA",
        "premium_sum": 1338586,
        "broker_commission_sum": 30000,
        "participants_sum": 230
    },
    {
        "ein": 43040660,
        "company_name": "BROOKS AUTOMATION, INC.",
        "plan_year": 2018,
        "employee_count": 1031,
        "company_state": "MA",
        "premium_sum": 48842,
        "broker_commission_sum": 4884,
        "participants_sum": 1
    },
    {
        "ein": 43040660,
        "company_name": "BROOKS AUTOMATION, INC.",
        "plan_year": 2017,
        "employee_count": 1035,
        "company_state": "MA",
        "premium_sum": 60500,
        "broker_commission_sum": 6050,
        "participants_sum": 2
    },
    {
        "ein": 43040915,
        "company_name": "ARC TECHNOLOGIES, INC.",
        "plan_year": 2017,
        "employee_count": 161,
        "company_state": "MA",
        "premium_sum": 1708840,
        "broker_commission_sum": 35661,
        "participants_sum": 286
    },
    {
        "ein": 43047271,
        "company_name": "ABEL WOMACK, INC.",
        "plan_year": 2019,
        "employee_count": 220,
        "company_state": "MA",
        "premium_sum": 186,
        "broker_commission_sum": 23,
        "participants_sum": 1
    },
    {
        "ein": 43047271,
        "company_name": "ABEL WOMACK, INC.",
        "plan_year": 2018,
        "employee_count": 218,
        "company_state": "MA",
        "premium_sum": 200,
        "broker_commission_sum": 22,
        "participants_sum": 1
    },
    {
        "ein": 43047271,
        "company_name": "ABEL WOMACK, INC.",
        "plan_year": 2017,
        "employee_count": 227,
        "company_state": "MA",
        "premium_sum": 37794,
        "broker_commission_sum": 7767,
        "participants_sum": 339
    },
    {
        "ein": 43052905,
        "company_name": "HEALTHDRIVE CORP",
        "plan_year": 2019,
        "employee_count": 230,
        "company_state": "MA",
        "premium_sum": 2639949,
        "broker_commission_sum": 47219,
        "participants_sum": 238
    },
    {
        "ein": 43052905,
        "company_name": "HEALTHDRIVE CORP",
        "plan_year": 2018,
        "employee_count": 212,
        "company_state": "MA",
        "premium_sum": 2300087,
        "broker_commission_sum": 57564,
        "participants_sum": 200
    },
    {
        "ein": 43052905,
        "company_name": "HEALTHDRIVE CORP",
        "plan_year": 2017,
        "employee_count": 295,
        "company_state": "MA",
        "premium_sum": 1880948,
        "broker_commission_sum": 47024,
        "participants_sum": 184
    },
    {
        "ein": 43058228,
        "company_name": "PEOPLEFLUENT, INC.",
        "plan_year": 2017,
        "employee_count": 867,
        "company_state": "MA",
        "premium_sum": 5870063,
        "broker_commission_sum": 8458,
        "participants_sum": 1012
    },
    {
        "ein": 43059039,
        "company_name": "NORTH COAST SEA-FOODS CORPORATION",
        "plan_year": 2019,
        "employee_count": 348,
        "company_state": "MA",
        "premium_sum": 1736939,
        "broker_commission_sum": 63705,
        "participants_sum": 285
    },
    {
        "ein": 43059039,
        "company_name": "NORTH COAST SEA-FOODS CORPORATION",
        "plan_year": 2018,
        "employee_count": 346,
        "company_state": "MA",
        "premium_sum": 1686503,
        "broker_commission_sum": 72714,
        "participants_sum": 295
    },
    {
        "ein": 43059039,
        "company_name": "NORTH COAST SEA-FOODS CORPORATION",
        "plan_year": 2017,
        "employee_count": 367,
        "company_state": "MA",
        "premium_sum": 1637579,
        "broker_commission_sum": 65546,
        "participants_sum": 196
    },
    {
        "ein": 43061090,
        "company_name": "WORLDCOM EXCHANGE, INC.",
        "plan_year": 2019,
        "employee_count": 93,
        "company_state": "NH",
        "premium_sum": 1410701,
        "broker_commission_sum": 41959,
        "participants_sum": 268
    },
    {
        "ein": 43061090,
        "company_name": "WORLDCOM EXCHANGE, INC.",
        "plan_year": 2018,
        "employee_count": 102,
        "company_state": "NH",
        "premium_sum": 1266112,
        "broker_commission_sum": 42996,
        "participants_sum": 263
    },
    {
        "ein": 43061090,
        "company_name": "WORLDCOM EXCHANGE, INC.",
        "plan_year": 2017,
        "employee_count": 105,
        "company_state": "NH",
        "premium_sum": 1012243,
        "broker_commission_sum": 34235,
        "participants_sum": 240
    },
    {
        "ein": 43061714,
        "company_name": "ISAACSON MILLER",
        "plan_year": 2019,
        "employee_count": 205,
        "company_state": "MA",
        "premium_sum": 102320,
        "broker_commission_sum": 6562,
        "participants_sum": 15
    },
    {
        "ein": 43061714,
        "company_name": "ISAACSON MILLER",
        "plan_year": 2018,
        "employee_count": 171,
        "company_state": "MA",
        "premium_sum": 63349,
        "broker_commission_sum": 4541,
        "participants_sum": 14
    },
    {
        "ein": 43061714,
        "company_name": "ISAACSON MILLER",
        "plan_year": 2017,
        "employee_count": 169,
        "company_state": "MA",
        "premium_sum": 1847945,
        "broker_commission_sum": 41510,
        "participants_sum": 243
    },
    {
        "ein": 43064382,
        "company_name": "SPRUCE ENVIRONMENTAL TECHNOLOGIES, INC.",
        "plan_year": 2018,
        "employee_count": 121,
        "company_state": "MA",
        "premium_sum": 1235193,
        "broker_commission_sum": 33190,
        "participants_sum": 179
    },
    {
        "ein": 43064382,
        "company_name": "SPRUCE ENVIRONMENTAL TECHNOLOGIES, INC.",
        "plan_year": 2017,
        "employee_count": 118,
        "company_state": "MA",
        "premium_sum": 949589,
        "broker_commission_sum": 28365,
        "participants_sum": 144
    },
    {
        "ein": 43064434,
        "company_name": "INTERNATIONAL INFORMATION SYSTEM SECURITY CERTIFICATION CONSORTIUM",
        "plan_year": 2019,
        "employee_count": 150,
        "company_state": "FL",
        "premium_sum": 1524779,
        "broker_commission_sum": 76913,
        "participants_sum": 253
    },
    {
        "ein": 43064434,
        "company_name": "INTERNATIONAL INFORMATION SYSTEMS SECURITY CERTIFICATION CONSORTIUM",
        "plan_year": 2018,
        "employee_count": 139,
        "company_state": "FL",
        "premium_sum": 1327736,
        "broker_commission_sum": 66189,
        "participants_sum": 250
    },
    {
        "ein": 43065144,
        "company_name": "AMERICA'S TEST KITCHEN, LP",
        "plan_year": 2019,
        "employee_count": 200,
        "company_state": "MA",
        "premium_sum": 1205176,
        "broker_commission_sum": 0,
        "participants_sum": 142
    },
    {
        "ein": 43067724,
        "company_name": "EASTERN BANK",
        "plan_year": 2019,
        "employee_count": 700,
        "company_state": "MA",
        "premium_sum": 21745422,
        "broker_commission_sum": 209204,
        "participants_sum": 1222
    },
    {
        "ein": 43067724,
        "company_name": "EASTERN BANK",
        "plan_year": 2018,
        "employee_count": 3275,
        "company_state": "MA",
        "premium_sum": 21706107,
        "broker_commission_sum": 169895,
        "participants_sum": 3275
    },
    {
        "ein": 43067724,
        "company_name": "EASTERN BANK",
        "plan_year": 2017,
        "employee_count": 3302,
        "company_state": "MA",
        "premium_sum": 20864301,
        "broker_commission_sum": 182587,
        "participants_sum": 3302
    },
    {
        "ein": 43070901,
        "company_name": "MAGELLAN AEROSPACE HAVERHILL, INC.",
        "plan_year": 2017,
        "employee_count": 147,
        "company_state": "MA",
        "premium_sum": 1481922,
        "broker_commission_sum": 40760,
        "participants_sum": 311
    },
    {
        "ein": 43071634,
        "company_name": "CALLAHAN INC.",
        "plan_year": 2019,
        "employee_count": 188,
        "company_state": "MA",
        "premium_sum": 2216100,
        "broker_commission_sum": 43865,
        "participants_sum": 368
    },
    {
        "ein": 43071634,
        "company_name": "CALLAHAN INC.",
        "plan_year": 2018,
        "employee_count": 162,
        "company_state": "MA",
        "premium_sum": 2138386,
        "broker_commission_sum": 41745,
        "participants_sum": 342
    },
    {
        "ein": 43071634,
        "company_name": "CALLAHAN INC.",
        "plan_year": 2017,
        "employee_count": 170,
        "company_state": "MA",
        "premium_sum": 2460261,
        "broker_commission_sum": 41132,
        "participants_sum": 364
    },
    {
        "ein": 43077056,
        "company_name": "MOODY, FAMIGLIETTI & ANDRONICO, LLP",
        "plan_year": 2019,
        "employee_count": 138,
        "company_state": "MA",
        "premium_sum": 1375989,
        "broker_commission_sum": 1898,
        "participants_sum": 158
    },
    {
        "ein": 43084417,
        "company_name": "LIAISON INTERNATIONAL, LLC",
        "plan_year": 2019,
        "employee_count": 259,
        "company_state": "MA",
        "premium_sum": 1744607,
        "broker_commission_sum": 68765,
        "participants_sum": 435
    },
    {
        "ein": 43084417,
        "company_name": "LIAISON INTERNATIONAL, LLC",
        "plan_year": 2018,
        "employee_count": 267,
        "company_state": "MA",
        "premium_sum": 1835091,
        "broker_commission_sum": 72410,
        "participants_sum": 469
    },
    {
        "ein": 43084417,
        "company_name": "LIAISON INTERNATIONAL, LLC",
        "plan_year": 2017,
        "employee_count": 298,
        "company_state": "MA",
        "premium_sum": 2390404,
        "broker_commission_sum": 50218,
        "participants_sum": 461
    },
    {
        "ein": 43095475,
        "company_name": "TRINITY EMS, INC.",
        "plan_year": 2019,
        "employee_count": 305,
        "company_state": "MA",
        "premium_sum": 1498105,
        "broker_commission_sum": 62934,
        "participants_sum": 187
    },
    {
        "ein": 43095475,
        "company_name": "TRINITY EMS, INC.",
        "plan_year": 2018,
        "employee_count": 322,
        "company_state": "MA",
        "premium_sum": 1452584,
        "broker_commission_sum": 72633,
        "participants_sum": 215
    },
    {
        "ein": 43097449,
        "company_name": "ELIASSEN GROUP, LLC",
        "plan_year": 2019,
        "employee_count": 774,
        "company_state": "MA",
        "premium_sum": 35099,
        "broker_commission_sum": 4165,
        "participants_sum": 834
    },
    {
        "ein": 43097449,
        "company_name": "ELIASSEN GROUP, LLC",
        "plan_year": 2018,
        "employee_count": 393,
        "company_state": "MA",
        "premium_sum": 33756,
        "broker_commission_sum": 443,
        "participants_sum": 393
    },
    {
        "ein": 43097449,
        "company_name": "ELIASSEN GROUP, LLC",
        "plan_year": 2012,
        "employee_count": 32,
        "company_state": "MA",
        "premium_sum": 995854,
        "broker_commission_sum": 5410,
        "participants_sum": 31
    },
    {
        "ein": 43097814,
        "company_name": "HALLKEEN MANAGEMENT, INC.",
        "plan_year": 2019,
        "employee_count": 782,
        "company_state": "MA",
        "premium_sum": 2870902,
        "broker_commission_sum": 45804,
        "participants_sum": 368
    },
    {
        "ein": 43097814,
        "company_name": "HALLKEEN MANAGEMENT, INC.",
        "plan_year": 2018,
        "employee_count": 757,
        "company_state": "MA",
        "premium_sum": 3064635,
        "broker_commission_sum": 47756,
        "participants_sum": 372
    },
    {
        "ein": 43097814,
        "company_name": "HALLKEEN MANAGEMENT, INC.",
        "plan_year": 2017,
        "employee_count": 593,
        "company_state": "MA",
        "premium_sum": 2959604,
        "broker_commission_sum": 46761,
        "participants_sum": 418
    },
    {
        "ein": 43098024,
        "company_name": "VETERANS INC.",
        "plan_year": 2019,
        "employee_count": 98,
        "company_state": "MA",
        "premium_sum": 780137,
        "broker_commission_sum": 18713,
        "participants_sum": 125
    },
    {
        "ein": 43098024,
        "company_name": "VETERANS, INC.",
        "plan_year": 2018,
        "employee_count": 108,
        "company_state": "MA",
        "premium_sum": 702823,
        "broker_commission_sum": 21355,
        "participants_sum": 71
    },
    {
        "ein": 43098024,
        "company_name": "VETERANS, INC.",
        "plan_year": 2017,
        "employee_count": 114,
        "company_state": "MA",
        "premium_sum": 645468,
        "broker_commission_sum": 23871,
        "participants_sum": 136
    },
    {
        "ein": 43104075,
        "company_name": "ANAESTHESIA ASSOCIATES OF MASSACHUSETTS, P.C.",
        "plan_year": 2019,
        "employee_count": 98,
        "company_state": "MA",
        "premium_sum": 865963,
        "broker_commission_sum": 21585,
        "participants_sum": 117
    },
    {
        "ein": 43106389,
        "company_name": "AMTRUST FINANCIAL SERVICES, INC.",
        "plan_year": 2018,
        "employee_count": 4082,
        "company_state": "OH",
        "premium_sum": 781406,
        "broker_commission_sum": 117211,
        "participants_sum": 2700
    },
    {
        "ein": 43107278,
        "company_name": "COLLECTO INCORPORATED EOS USA",
        "plan_year": 2018,
        "employee_count": 217,
        "company_state": "MA",
        "premium_sum": 2213078,
        "broker_commission_sum": 78572,
        "participants_sum": 451
    },
    {
        "ein": 43107278,
        "company_name": "COLLECTO INCORPORATED EOS USA",
        "plan_year": 2017,
        "employee_count": 255,
        "company_state": "MA",
        "premium_sum": 439991,
        "broker_commission_sum": 22924,
        "participants_sum": 29
    },
    {
        "ein": 43108436,
        "company_name": "THE SWITCH ENTERPRISES, LLC",
        "plan_year": 2019,
        "employee_count": 117,
        "company_state": "MA",
        "premium_sum": 1957915,
        "broker_commission_sum": 78105,
        "participants_sum": 237
    },
    {
        "ein": 43108436,
        "company_name": "THE SWITCH ENTERPRISES, LLC",
        "plan_year": 2018,
        "employee_count": 107,
        "company_state": "MA",
        "premium_sum": 1592814,
        "broker_commission_sum": 79081,
        "participants_sum": 94
    },
    {
        "ein": 43108436,
        "company_name": "THE SWITCH ENTERPRISES, LLC",
        "plan_year": 2017,
        "employee_count": 117,
        "company_state": "MA",
        "premium_sum": 2044150,
        "broker_commission_sum": 9069,
        "participants_sum": 249
    }
]

module.exports = {
    mockData
}