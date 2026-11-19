// Her Lesson Breakdown, Units 1-8 and Compositions (the most current version, 2026-11-19), imported by
// scripts/import-lesson-breakdown.py. Each skill lists the formula set taught together, as her formula code and its
// example sentence. "working" marks a code she has not added to Sentence Formulas yet. Do not edit by hand: re-run.
export interface BreakdownFormula { code: string; example: string; levels: string[]; working: boolean; note: string }
export interface BreakdownSkill { id: string; title: string; levels: string[]; formulas: BreakdownFormula[] }
export interface BreakdownLesson { id: string; title: string; levels: string[]; skills: BreakdownSkill[] }
export interface BreakdownUnit { id: string; title: string; composition: string; lessons: BreakdownLesson[] }
export const LESSON_BREAKDOWN: BreakdownUnit[] = [
 {
  "id": "1",
  "title": "Statements",
  "composition": "5 statements on one topic",
  "lessons": [
   {
    "id": "1.1",
    "title": "Simple Statements",
    "levels": [
     "A",
     "B",
     "C"
    ],
    "skills": [
     {
      "id": "1.1.1",
      "title": "Writing simple statements",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "S1.A",
        "example": "The dog ran.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       },
       {
        "code": "S1",
        "example": "Dogs run.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       },
       {
        "code": "S1.P",
        "example": "She runs.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     },
     {
      "id": "1.1.2",
      "title": "Past, present, future",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "S1.A",
        "example": "The dog jumped.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       },
       {
        "code": "S1.A.V",
        "example": "The dog will jump.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": "will"
       }
      ]
     },
     {
      "id": "1.1.3",
      "title": "Statements with proper nouns",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": []
     },
     {
      "id": "1.1.3A",
      "title": "Names",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "S1.PN",
        "example": "Sam ran.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     },
     {
      "id": "1.1.3B",
      "title": "Places",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "S1.PN.R",
        "example": "Luna lives in Texas.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": true,
        "note": ""
       }
      ]
     },
     {
      "id": "1.1.3C",
      "title": "Dates and holidays",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "S1.PN.R",
        "example": "Max swims on Friday.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": true,
        "note": ""
       }
      ]
     },
     {
      "id": "1.1.3D",
      "title": "Titles and suffixes",
      "levels": [
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "S1.PN",
        "example": "Dr. Lee helped.",
        "levels": [
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     }
    ]
   },
   {
    "id": "1.4",
    "title": "Statements with two people (I or me)",
    "levels": [
     "B",
     "C"
    ],
    "skills": [
     {
      "id": "1.4",
      "title": "Statements with two people (I or me)",
      "levels": [
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "S1.PN.P.C",
        "example": "Sam and I ran.",
        "levels": [
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     }
    ]
   },
   {
    "id": "1.5",
    "title": "Being and doing",
    "levels": [
     "A",
     "B",
     "C"
    ],
    "skills": [
     {
      "id": "1.5.1",
      "title": "Being statements",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "S3.A",
        "example": "The turtle is slow.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       },
       {
        "code": "S3.P",
        "example": "I am happy.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       },
       {
        "code": "S4.A.PN",
        "example": "Max is a dog.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     },
     {
      "id": "1.5.2",
      "title": "Doing statements",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "S2.P.P",
        "example": "I do my homework.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       },
       {
        "code": "S1.A.V",
        "example": "The otter is floating. The dog can swim.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     }
    ]
   },
   {
    "id": "1.6",
    "title": "Adding a What",
    "levels": [
     "A",
     "B",
     "C"
    ],
    "skills": [
     {
      "id": "1.6",
      "title": "Adding a What",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "S2.A.A",
        "example": "The dog chased the cat.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       },
       {
        "code": "S2.A.PN",
        "example": "Sam kicked the ball.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       },
       {
        "code": "S2.A.P",
        "example": "She ate the apple.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     }
    ]
   },
   {
    "id": "1.6A",
    "title": "Plurals",
    "levels": [
     "A",
     "B",
     "C"
    ],
    "skills": [
     {
      "id": "1.6A",
      "title": "Plurals",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "S2.A.J",
        "example": "The cat sees two birds.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     }
    ]
   },
   {
    "id": "1.7",
    "title": "Ownership",
    "levels": [
     "B",
     "C"
    ],
    "skills": [
     {
      "id": "1.7.1",
      "title": "Ownership using apostrophes",
      "levels": [
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "S1.A.N's",
        "example": "The dog's bone fell.",
        "levels": [
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       },
       {
        "code": "S1.PN's",
        "example": "Sam's dog ran.",
        "levels": [
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     },
     {
      "id": "1.7.2",
      "title": "their, there, they're",
      "levels": [
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "S1.P",
        "example": "Their dog barks.",
        "levels": [
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     },
     {
      "id": "1.7.3",
      "title": "me, him, them",
      "levels": [
       "C"
      ],
      "formulas": [
       {
        "code": "S2.A.P",
        "example": "The dog licked me.",
        "levels": [
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     }
    ]
   },
   {
    "id": "1.8",
    "title": "Not statements and contractions",
    "levels": [
     "A",
     "B",
     "C"
    ],
    "skills": [
     {
      "id": "1.8.1",
      "title": "Not after the verb",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "Sn3.A.B",
        "example": "The dog is not wet.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       },
       {
        "code": "Sn1.A.V.B",
        "example": "The bird did not fly.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     },
     {
      "id": "1.8.2",
      "title": "Contractions with not",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "Sn1.A.V'B",
        "example": "The bird didn't fly.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     },
     {
      "id": "1.8.3",
      "title": "Pronoun contractions",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "S3.P'V",
        "example": "It's cold. You're kind.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "2",
  "title": "Description",
  "composition": "5 describing sentences about one picture or topic",
  "lessons": [
   {
    "id": "2.1",
    "title": "Describing the Who and the What",
    "levels": [
     "A",
     "B",
     "C"
    ],
    "skills": [
     {
      "id": "2.1.1",
      "title": "One describing word before a noun",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "S1.A.J",
        "example": "The small dog ran.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       },
       {
        "code": "S2.A.A.J",
        "example": "The dog chased the red ball.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     },
     {
      "id": "2.1.2",
      "title": "Being word + describing word",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "S3.A",
        "example": "The ice is cold.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     },
     {
      "id": "2.1.3",
      "title": "Exact words: adjectives and strong verbs",
      "levels": [
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "S1.A.J",
        "example": "The huge dog sprinted.",
        "levels": [
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     }
    ]
   },
   {
    "id": "2.2",
    "title": "Two or more describing words",
    "levels": [
     "A",
     "B",
     "C"
    ],
    "skills": [
     {
      "id": "2.2.1",
      "title": "Two in order",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "S1.A.J.J",
        "example": "The small brown dog ran.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     },
     {
      "id": "2.2.2",
      "title": "Three in order",
      "levels": [
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "S1.A.J.J.J",
        "example": "The funny little pink pig danced.",
        "levels": [
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     },
     {
      "id": "2.2.3",
      "title": "Commas between same-kind describing words",
      "levels": [
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "S1.A.J.J.J",
        "example": "The kind, happy, funny dog barked.",
        "levels": [
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     }
    ]
   },
   {
    "id": "2.3",
    "title": "Comparing",
    "levels": [
     "A",
     "B",
     "C"
    ],
    "skills": [
     {
      "id": "2.3.1",
      "title": "-er and than",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "S3.A.PRP",
        "example": "The cat is faster than the dog.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     },
     {
      "id": "2.3.2",
      "title": "-est",
      "levels": [
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "S4.A.A.J",
        "example": "The cheetah is the fastest animal.",
        "levels": [
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     },
     {
      "id": "2.3.3",
      "title": "more and most",
      "levels": [
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "S3.A.B.PRP",
        "example": "The book is more exciting than the movie.",
        "levels": [
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     }
    ]
   },
   {
    "id": "2.4",
    "title": "How words (adverbs)",
    "levels": [
     "A",
     "B",
     "C"
    ],
    "skills": [
     {
      "id": "2.4.1",
      "title": "Adverb after the Action",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "S1.A.B",
        "example": "The dog ran quickly.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     },
     {
      "id": "2.4.2",
      "title": "Adverb before a describing word",
      "levels": [
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "S1.A.J.B",
        "example": "The very small dog ran.",
        "levels": [
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     },
     {
      "id": "2.4.3",
      "title": "Adverb first",
      "levels": [
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "B,S1.A",
        "example": "Quickly, the dog ran.",
        "levels": [
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     }
    ]
   },
   {
    "id": "2.5",
    "title": "Where and when parts",
    "levels": [
     "A",
     "B",
     "C"
    ],
    "skills": [
     {
      "id": "2.5.1",
      "title": "Where and when parts after the Action",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "S1.A.PRP",
        "example": "The dog ran to the park.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       },
       {
        "code": "S5.A",
        "example": "The cat is under the bed.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     },
     {
      "id": "2.5.2",
      "title": "Where or when part first",
      "levels": [
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "PRP,S1.A",
        "example": "After lunch, the dog ran.",
        "levels": [
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     },
     {
      "id": "2.5.3",
      "title": "Stretching a sentence",
      "levels": [
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "S1.A.J.B.PRP.PRP",
        "example": "The small dog ran quickly to the park after lunch.",
        "levels": [
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     }
    ]
   },
   {
    "id": "2.6",
    "title": "Adding information about a noun",
    "levels": [
     "B",
     "C"
    ],
    "skills": [
     {
      "id": "2.6.1",
      "title": "Renaming a noun (appositives)",
      "levels": [
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "S1.PN.P.N",
        "example": "Max, my dog, barked.",
        "levels": [
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     },
     {
      "id": "2.6.2",
      "title": "who and which parts",
      "levels": [
       "C"
      ],
      "formulas": [
       {
        "code": "S1.A[1.P]",
        "example": "The girl who won smiled.",
        "levels": [
         "C"
        ],
        "working": false,
        "note": ""
       },
       {
        "code": "S1.A,[3.P],",
        "example": "The cat, which was small, hid.",
        "levels": [
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     }
    ]
   },
   {
    "id": "2.7",
    "title": "Figurative language",
    "levels": [
     "A",
     "B",
     "C"
    ],
    "skills": [
     {
      "id": "2.7.1",
      "title": "Similes",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "S1.A.PRP",
        "example": "The truck roared like a lion.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       },
       {
        "code": "S3.A.B.PRP",
        "example": "The soup was as hot as lava.",
        "levels": [
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     },
     {
      "id": "2.7.2",
      "title": "Metaphors and personification",
      "levels": [
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "S4.P.A",
        "example": "My room is a tornado.",
        "levels": [
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       },
       {
        "code": "S1.A",
        "example": "The wind whispered.",
        "levels": [
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     },
     {
      "id": "2.7.3",
      "title": "Sound words",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "I + S1.A",
        "example": "Crash! The plate fell.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     },
     {
      "id": "2.7.4",
      "title": "Hyperbole",
      "levels": [
       "C"
      ],
      "formulas": [
       {
        "code": "(S3.P.B)C[S2.A.P.V]",
        "example": "I was so hungry that I could eat a horse.",
        "levels": [
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "3",
  "title": "Questions",
  "composition": "an interview of 5 questions, with the answers in full sentences",
  "lessons": [
   {
    "id": "3.1",
    "title": "Yes or no questions",
    "levels": [
     "A",
     "B",
     "C"
    ],
    "skills": [
     {
      "id": "3.1.1",
      "title": "Being word first",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "Q3.A",
        "example": "Is the turtle slow?",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       },
       {
        "code": "Q1.A.V",
        "example": "Is the dog sleeping?",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     },
     {
      "id": "3.1.2",
      "title": "do, does, did first",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "Q1.A.V",
        "example": "Did the dog run?",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       },
       {
        "code": "Q2.A.V",
        "example": "Does the cat like fish?",
        "levels": [
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     },
     {
      "id": "3.1.3",
      "title": "Helping word first",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "Q1.P.V",
        "example": "Can you come?",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       },
       {
        "code": "Q2.A.P.V",
        "example": "Could you sign the form?",
        "levels": [
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     }
    ]
   },
   {
    "id": "3.2",
    "title": "Question-word questions",
    "levels": [
     "A",
     "B",
     "C"
    ],
    "skills": [
     {
      "id": "3.2.1",
      "title": "who, what, where",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "Q2.A.P",
        "example": "Who ate the cake?",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       },
       {
        "code": "Q1.A.V.B",
        "example": "Where did the cat go?",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       },
       {
        "code": "Q2.A.P.V",
        "example": "What did the dog chase?",
        "levels": [
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     },
     {
      "id": "3.2.2",
      "title": "when, why, how",
      "levels": [
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "Q2.P.V.J.B",
        "example": "Why did you choose this job?",
        "levels": [
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     },
     {
      "id": "3.2.3",
      "title": "which and whose",
      "levels": [
       "C"
      ],
      "formulas": [
       {
        "code": "Q1.J",
        "example": "Which dog won?",
        "levels": [
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     }
    ]
   },
   {
    "id": "3.3",
    "title": "Answering in full sentences",
    "levels": [
     "A",
     "B",
     "C"
    ],
    "skills": [
     {
      "id": "3.3.1",
      "title": "Restate the question",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "S1.A.B",
        "example": "The cat went home.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       },
       {
        "code": "S5.A",
        "example": "The cat is under the bed.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     },
     {
      "id": "3.3.2",
      "title": "Answers with a reason",
      "levels": [
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "(S3.P)C[S1.P]",
        "example": "He was sad because his toy broke.",
        "levels": [
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "4",
  "title": "Commands",
  "composition": "5 how-to steps for a real task",
  "lessons": [
   {
    "id": "4.1",
    "title": "Commands",
    "levels": [
     "A",
     "B",
     "C"
    ],
    "skills": [
     {
      "id": "4.1.1",
      "title": "Action + What (hidden you)",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "C2.A",
        "example": "Close the door.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       },
       {
        "code": "C1.B",
        "example": "Sit down.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     },
     {
      "id": "4.1.2",
      "title": "please",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "C2.A.B",
        "example": "Please pass the milk.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     },
     {
      "id": "4.1.3",
      "title": "Action + What + where",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "C2.A.PRP",
        "example": "Put the book on the shelf.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     },
     {
      "id": "4.1.4",
      "title": "don't commands",
      "levels": [
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "Cn2.A.V'B",
        "example": "Don't touch the stove.",
        "levels": [
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     }
    ]
   },
   {
    "id": "4.2",
    "title": "Steps in order",
    "levels": [
     "A",
     "B",
     "C"
    ],
    "skills": [
     {
      "id": "4.2",
      "title": "Steps in order",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "B,C2.A",
        "example": "First, mix the flour.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     }
    ]
   },
   {
    "id": "4.3",
    "title": "Talking to someone by name",
    "levels": [
     "B",
     "C"
    ],
    "skills": [
     {
      "id": "4.3.1",
      "title": "Name first",
      "levels": [
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "PN,C2.A",
        "example": "Sam, close the door.",
        "levels": [
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     },
     {
      "id": "4.3.2",
      "title": "Name last",
      "levels": [
       "C"
      ],
      "formulas": [
       {
        "code": "C2.A,PN",
        "example": "Close the door, Sam.",
        "levels": [
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "5",
  "title": "Feelings and Exclamations",
  "composition": "5 sentences about how a moment felt",
  "lessons": [
   {
    "id": "5.1",
    "title": "Exclamations",
    "levels": [
     "A",
     "B",
     "C"
    ],
    "skills": [
     {
      "id": "5.1.1",
      "title": "Feeling word + sentence",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "I + S1.A.B",
        "example": "Wow! The dog ran fast.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     },
     {
      "id": "5.1.2",
      "title": "Exclamation sentences",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "E3.A",
        "example": "The dog is huge!",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     },
     {
      "id": "5.1.3",
      "title": "Using ! sparingly",
      "levels": [
       "C"
      ],
      "formulas": [
       {
        "code": "E3.A",
        "example": "The dog is huge!",
        "levels": [
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     }
    ]
   },
   {
    "id": "5.2",
    "title": "Feeling sentences",
    "levels": [
     "A",
     "B",
     "C"
    ],
    "skills": [
     {
      "id": "5.2.1",
      "title": "I feel + feeling word",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "S6.P",
        "example": "I feel happy.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     },
     {
      "id": "5.2.2",
      "title": "Exact feeling words",
      "levels": [
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "S6.P",
        "example": "I feel thrilled.",
        "levels": [
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     },
     {
      "id": "5.2.3",
      "title": "A feeling and why",
      "levels": [
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "(S6.P)C[S1.P]",
        "example": "I feel happy because we won.",
        "levels": [
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     },
     {
      "id": "5.2.4",
      "title": "Showing, not telling",
      "levels": [
       "C"
      ],
      "formulas": [
       {
        "code": "S1.P",
        "example": "Her hands shook.",
        "levels": [
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "6",
  "title": "Connecting",
  "composition": "5 sentences on one topic, at least two of them joined",
  "lessons": [
   {
    "id": "6.1",
    "title": "Joining words",
    "levels": [
     "A",
     "B",
     "C"
    ],
    "skills": [
     {
      "id": "6.1.1",
      "title": "Two Who's",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "S1.A.A.C",
        "example": "The cat and the dog ran.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       },
       {
        "code": "S1.PN.PN.C",
        "example": "Sam and Mia ran.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     },
     {
      "id": "6.1.2",
      "title": "Two Actions",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "S1.A.V.C",
        "example": "The dog ran and jumped.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     },
     {
      "id": "6.1.3",
      "title": "Two describing words",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "S3.A.J.C",
        "example": "The dog was wet and cold.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     },
     {
      "id": "6.1.4",
      "title": "Lists of three",
      "levels": [
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "S1.A.A.A.C",
        "example": "The cat, the dog, and the bird ran.",
        "levels": [
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     }
    ]
   },
   {
    "id": "6.2",
    "title": "Joining two sentences",
    "levels": [
     "A",
     "B",
     "C"
    ],
    "skills": [
     {
      "id": "6.2.1",
      "title": ", and",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "(S1.A)C",
        "example": "The dog ran, and the cat hid.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": "S1.A"
       }
      ]
     },
     {
      "id": "6.2.2",
      "title": ", but and , so",
      "levels": [
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "(S3.P)C",
        "example": "It was cold, but we played.",
        "levels": [
         "B",
         "C"
        ],
        "working": false,
        "note": "S1.P"
       },
       {
        "code": "(S1.P)C",
        "example": "It rained, so we stayed inside.",
        "levels": [
         "B",
         "C"
        ],
        "working": false,
        "note": "S1.P.B"
       }
      ]
     },
     {
      "id": "6.2.3",
      "title": ", or",
      "levels": [
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "(S1.P.V)C",
        "example": "We can paint, or we can read.",
        "levels": [
         "B",
         "C"
        ],
        "working": false,
        "note": "S1.P.V"
       }
      ]
     }
    ]
   },
   {
    "id": "6.3",
    "title": "Fixing run-ons and splices",
    "levels": [
     "A",
     "B",
     "C"
    ],
    "skills": [
     {
      "id": "6.3.1",
      "title": "Run-ons",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "(S1.A)C",
        "example": "The dog barked, and the cat hid.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": "S1.A"
       }
      ]
     },
     {
      "id": "6.3.2",
      "title": "Comma splices",
      "levels": [
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "(S1.A)C",
        "example": "The dog barked, and the cat hid.",
        "levels": [
         "B",
         "C"
        ],
        "working": false,
        "note": "S1.A"
       }
      ]
     },
     {
      "id": "6.3.3",
      "title": "Semicolons",
      "levels": [
       "C"
      ],
      "formulas": [
       {
        "code": "(S1.A);",
        "example": "The dog barked; the cat hid.",
        "levels": [
         "C"
        ],
        "working": false,
        "note": "S1.A"
       }
      ]
     }
    ]
   },
   {
    "id": "6.4",
    "title": "Combining sentences",
    "levels": [
     "A",
     "B",
     "C"
    ],
    "skills": [
     {
      "id": "6.4.1",
      "title": "Combine two",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "S3.A.J.C",
        "example": "The dog is big and brown.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     },
     {
      "id": "6.4.2",
      "title": "Combine three or more",
      "levels": [
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "S1.A.J.B.PRP",
        "example": "The big dog ran quickly to the park.",
        "levels": [
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "7",
  "title": "Reasons",
  "composition": "5 sentences giving an opinion and its reasons",
  "lessons": [
   {
    "id": "7.1",
    "title": "because",
    "levels": [
     "A",
     "B",
     "C"
    ],
    "skills": [
     {
      "id": "7.1.1",
      "title": "Sentence + because + sentence",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "(S1.A)C[S1.A]",
        "example": "The dog barked because a cat came.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       },
       {
        "code": "(S1.P.B)C[S1.P]",
        "example": "We stayed in because it rained.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     },
     {
      "id": "7.1.2",
      "title": "A complete because part",
      "levels": [
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "(S1.A)C[S1.A]",
        "example": "The dog barked because a cat came.",
        "levels": [
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     },
     {
      "id": "7.1.3",
      "title": "Why? → because",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "(S1.P.B)C[S1.P]",
        "example": "We stayed in because it rained.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     }
    ]
   },
   {
    "id": "7.2",
    "title": "because, but, so",
    "levels": [
     "B",
     "C"
    ],
    "skills": [
     {
      "id": "7.2",
      "title": "because, but, so",
      "levels": [
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "(S1.A)C[S1.A]",
        "example": "The dog barked because a cat came.",
        "levels": [
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       },
       {
        "code": "(S1.A)C",
        "example": "The dog barked, but nobody came.",
        "levels": [
         "B",
         "C"
        ],
        "working": false,
        "note": "S1.P"
       },
       {
        "code": "(S1.P)C",
        "example": "It rained, so we stayed inside.",
        "levels": [
         "B",
         "C"
        ],
        "working": false,
        "note": "S1.P.B"
       }
      ]
     }
    ]
   },
   {
    "id": "7.3",
    "title": "Reason first",
    "levels": [
     "B",
     "C"
    ],
    "skills": [
     {
      "id": "7.3.1",
      "title": "Because part first",
      "levels": [
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "C[S1.P],",
        "example": "Because it rained, we stayed in.",
        "levels": [
         "B",
         "C"
        ],
        "working": false,
        "note": "S1.P.B"
       }
      ]
     },
     {
      "id": "7.3.2",
      "title": "since, so that, therefore",
      "levels": [
       "C"
      ],
      "formulas": [
       {
        "code": "C[S3.P],",
        "example": "Since it was late, we left.",
        "levels": [
         "C"
        ],
        "working": false,
        "note": "S1.P"
       },
       {
        "code": "(S1.P.B)C[S1.P.V]",
        "example": "We left early so that we could rest.",
        "levels": [
         "C"
        ],
        "working": false,
        "note": ""
       },
       {
        "code": "(S1.P);",
        "example": "It rained; therefore, we stayed in.",
        "levels": [
         "C"
        ],
        "working": false,
        "note": "B,S1.P.B"
       }
      ]
     }
    ]
   },
   {
    "id": "7.4",
    "title": "Opinions with reasons",
    "levels": [
     "A",
     "B",
     "C"
    ],
    "skills": [
     {
      "id": "7.4",
      "title": "Opinions with reasons",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "(S2.P)C[S3]",
        "example": "I think that dogs are smart.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "8",
  "title": "Time and Order",
  "composition": "5 sentences telling events in order",
  "lessons": [
   {
    "id": "8.1",
    "title": "Order and time words",
    "levels": [
     "A",
     "B",
     "C"
    ],
    "skills": [
     {
      "id": "8.1.1",
      "title": "Order word first",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "B,S1.A",
        "example": "First, the dog ran.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     },
     {
      "id": "8.1.2",
      "title": "Transition phrases",
      "levels": [
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "PRP,S1.P",
        "example": "After that, we swam.",
        "levels": [
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     },
     {
      "id": "8.1.3",
      "title": "has, have, had + past form",
      "levels": [
       "C"
      ],
      "formulas": [
       {
        "code": "S1.P.V",
        "example": "She has finished.",
        "levels": [
         "C"
        ],
        "working": true,
        "note": ""
       }
      ]
     }
    ]
   },
   {
    "id": "8.2",
    "title": "Time parts",
    "levels": [
     "A",
     "B",
     "C"
    ],
    "skills": [
     {
      "id": "8.2.1",
      "title": "after and before",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "(S1.P)C[S2.P]",
        "example": "We played after we ate lunch.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       },
       {
        "code": "(C2.P)C[S1.P]",
        "example": "Wash your hands before you eat.",
        "levels": [
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     },
     {
      "id": "8.2.2",
      "title": "when and if",
      "levels": [
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "(S1.P)C[S3.P]",
        "example": "We swim when it is hot.",
        "levels": [
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       },
       {
        "code": "C[S1.P],",
        "example": "If it rains, we will stay inside.",
        "levels": [
         "B",
         "C"
        ],
        "working": false,
        "note": "S1.P.V.B"
       }
      ]
     },
     {
      "id": "8.2.3",
      "title": "while and until",
      "levels": [
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "(S1.A.J)C[S1.A.J]",
        "example": "The small dog ran while the big cat jumped.",
        "levels": [
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       },
       {
        "code": "(S1.P)C[S1.A]",
        "example": "We waited until the bus came.",
        "levels": [
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     }
    ]
   },
   {
    "id": "8.3",
    "title": "Time part first",
    "levels": [
     "A",
     "B",
     "C"
    ],
    "skills": [
     {
      "id": "8.3.1",
      "title": "Starting phrase",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "PRP,S1.A",
        "example": "After lunch, the kids played.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     },
     {
      "id": "8.3.2",
      "title": "When part first",
      "levels": [
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "C[S1.A],",
        "example": "When the bell rang, the dog barked.",
        "levels": [
         "B",
         "C"
        ],
        "working": false,
        "note": "S1.A"
       }
      ]
     },
     {
      "id": "8.3.3",
      "title": "although",
      "levels": [
       "C"
      ],
      "formulas": [
       {
        "code": "C[S1.P],",
        "example": "Although it rained, we played outside.",
        "levels": [
         "C"
        ],
        "working": false,
        "note": "S1.P.B"
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "C",
  "title": "Compositions",
  "composition": "",
  "lessons": [
   {
    "id": "",
    "title": "Procedures for every composition",
    "levels": [
     "A",
     "B",
     "C"
    ],
    "skills": [
     {
      "id": "",
      "title": "Choose the topic, reader and purpose",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": []
     },
     {
      "id": "",
      "title": "Plan with an organizer",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": []
     },
     {
      "id": "",
      "title": "Write with a formula check",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": []
     },
     {
      "id": "",
      "title": "Revise and edit with the checklist",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": []
     },
     {
      "id": "",
      "title": "Publish for a real reader",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": []
     }
    ]
   },
   {
    "id": "",
    "title": "Messages",
    "levels": [
     "A",
     "B",
     "C"
    ],
    "skills": [
     {
      "id": "",
      "title": "Labels and lists (colon before a list, C)",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": []
     },
     {
      "id": "",
      "title": "Notes and texts",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "S5.P",
        "example": "I am at the park.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       },
       {
        "code": "Q1.P.V",
        "example": "Can you come?",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     },
     {
      "id": "",
      "title": "Email: subject line, greeting, purpose, request, closing",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "S1.P.V.PRP",
        "example": "I am writing about the field trip.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       },
       {
        "code": "Q2.A.P.V",
        "example": "Could you sign the form?",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     },
     {
      "id": "",
      "title": "Cards, friendly letters and formal letters",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": []
     },
     {
      "id": "",
      "title": "Forms and applications: name, date, address, full-sentence answers",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": []
     },
     {
      "id": "",
      "title": "Times with colons",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "S1.A.PRP",
        "example": "The bus leaves at 3:15.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     },
     {
      "id": "",
      "title": "Formal or friendly: choosing words for the reader",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": []
     }
    ]
   },
   {
    "id": "",
    "title": "Paragraphs",
    "levels": [
     "A",
     "B",
     "C"
    ],
    "skills": [
     {
      "id": "",
      "title": "Topic sentence",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "S2.P.J.J",
        "example": "My dog has three favorite toys.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     },
     {
      "id": "",
      "title": "Details, explanations and closing",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": []
     },
     {
      "id": "",
      "title": "Transitions",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "PRP,S2.A.P.B",
        "example": "For example, he chases the ball daily.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     }
    ]
   },
   {
    "id": "",
    "title": "How-to article (directions)",
    "levels": [
     "A",
     "B",
     "C"
    ],
    "skills": [
     {
      "id": "",
      "title": "Steps with order words; a how-to paragraph",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": []
     }
    ]
   },
   {
    "id": "",
    "title": "Descriptive writing",
    "levels": [
     "A",
     "B",
     "C"
    ],
    "skills": [
     {
      "id": "",
      "title": "Describing a picture; a descriptive paragraph; sensory details",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": []
     },
     {
      "id": "",
      "title": "Poems: list poem, haiku, cinquain (Writing Craft Formulas)",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": []
     }
    ]
   },
   {
    "id": "",
    "title": "Writing about feelings",
    "levels": [
     "A",
     "B",
     "C"
    ],
    "skills": [
     {
      "id": "",
      "title": "A feeling paragraph; showing, not telling",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": []
     }
    ]
   },
   {
    "id": "",
    "title": "Interview and research questions",
    "levels": [
     "A",
     "B",
     "C"
    ],
    "skills": []
   },
   {
    "id": "",
    "title": "Narrative and personal narrative",
    "levels": [
     "A",
     "B",
     "C"
    ],
    "skills": [
     {
      "id": "",
      "title": "Story order, story elements, one time throughout",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": []
     },
     {
      "id": "",
      "title": "Story opener",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "PRP,S1.P.PRP",
        "example": "On Saturday, my family went to the lake.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     },
     {
      "id": "",
      "title": "Dialogue",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "S2.PN,\"C1.V'P\"",
        "example": "Mia said, \"Let's swim!\"",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     }
    ]
   },
   {
    "id": "",
    "title": "Report and research",
    "levels": [
     "A",
     "B",
     "C"
    ],
    "skills": [
     {
      "id": "",
      "title": "Fact or opinion; research question; notes; notes to sentences; report paragraph",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": []
     },
     {
      "id": "",
      "title": "Two sources",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "PRP,S2.B",
        "example": "According to the book, frogs swallow food whole.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     }
    ]
   },
   {
    "id": "",
    "title": "Opinion and argument",
    "levels": [
     "A",
     "B",
     "C"
    ],
    "skills": [
     {
      "id": "",
      "title": "Opinion with reasons; opinion paragraph",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": []
     },
     {
      "id": "",
      "title": "Counterclaim",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "(S2.J)C[S2]",
        "example": "Some people think that recess wastes time.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     },
     {
      "id": "",
      "title": "Rebuttal",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": [
       {
        "code": "B,S2",
        "example": "However, recess helps learning.",
        "levels": [
         "A",
         "B",
         "C"
        ],
        "working": false,
        "note": ""
       }
      ]
     }
    ]
   },
   {
    "id": "",
    "title": "Essay",
    "levels": [
     "A",
     "B",
     "C"
    ],
    "skills": [
     {
      "id": "",
      "title": "Introduction, body paragraphs, conclusion, revise and edit, publish",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": []
     }
    ]
   },
   {
    "id": "",
    "title": "Craft strategies",
    "levels": [
     "A",
     "B",
     "C"
    ],
    "skills": [
     {
      "id": "",
      "title": "Sentence variety, sensory details, figurative language, dashes and ellipses",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": []
     }
    ]
   },
   {
    "id": "",
    "title": "Creative writing",
    "levels": [
     "A",
     "B",
     "C"
    ],
    "skills": [
     {
      "id": "",
      "title": "Story from a picture, formula stories, free writing with a formula check",
      "levels": [
       "A",
       "B",
       "C"
      ],
      "formulas": []
     }
    ]
   }
  ]
 }
];
