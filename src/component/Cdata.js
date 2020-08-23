const HealthCarePackage=[
    {
        id:1,
        name:"Basic",
        title:"General Screening",
        Category:"ComboPackages",
        ProductConstituent:[
                            {name:"General",
                             test:"CBC,Urinalysis"},
                            {name:"Diabetes",
                             test:"Glucose(f)"},
                             {name:"Thyriod",
                             test:"TSH"},
                              {name:"Lipid",
                             test:"HDL,LDL,Triglycerides"},
                              {name:"Kidney",
                             test:"Uric Acid,BUN,Creatinine"},
                               {name:"Liver",
                             test:"SGPT,SGOT,Billirubin Total"}

                            

                           ],
        Prerequisite:"12 hours OR Overnight fasting is recommended",
        ReportAvailability:"Same Day",
        Price:"₹700/-",
        UsefulFor:"Ideal as a routine checkup."
   
    },
    
     {
        id:2,
        name:"Primary",
        title:"Essential Screening",
        Category:"ComboPackages",
        ProductConstituent:[
                            {name:"General",
                             test:"CBC,Urinalysis"},
                            {name:"Diabetes",
                             test:"Glucose(f),HbA1c"},
                             {name:"Thyriod",
                             test:"TSH,T3,T4"},
                              {name:"Lipid",
                             test:"HDL,LDL,Triglycerides"},
                              {name:"Kidney",
                             test:"Uric Acid,BUN,Creatinine"},
                               {name:"Liver",
                             test:"SGPT,SGOT,Billirubin,Alkaline Phosphate,Albulin,Globulin,A:g Ratio"},
                                 {name:"Anaemia Profile",
                             test:"Iron,Vitamin B-12"}
                           ],
        Prerequisite:"12 hours OR Overnight fasting is recommended",
        ReportAvailability:"Same Day",
        Price:"₹700/-",
        UsefulFor:"People with lifecycle disorders like tiredness,anxiety,high Blood pressue,etc."
   
    },
    
     {
        id:3,
        name:"Comprehensive",
        title:"Complete Screening",
        Category:"ComboPackages",
        ProductConstituent:[
                            {name:"General",
                             test:"CBC,Urinalysis"},
                            {name:"Diabetes",
                             test:"Glucose(f),HbA1c"},
                             {name:"Thyriod",
                             test:"TSH,T3,T4"},
                              {name:"Lipid",
                             test:"HDL,LDL,Triglycerides"},
                              {name:"Kidney",
                             test:"Uric Acid,BUN,Creatinine"},
                               {name:"Liver",
                             test:"SGPT,SGOT,Billirubin,Alkaline Phosphate,Albulin,Globulin,A:g Ratio"},
                                  {name:"Anaemia Profile",
                             test:"Iron,Vitamin B-12"},
                               {name:"Heart",
                             test:"S-electrolyte,Lipoprotein"},          
                                 {name:"Allergy",
                             test:"Total IgE"}
                           ],
        Prerequisite:"12 hours OR Overnight fasting is recommended",
        ReportAvailability:"Same Day",
        Price:"₹700/-",
        UsefulFor:"People with lifecycle disorders like tiredness,diabetes,allergy etc. "
   
    }   
]
export default HealthCarePackage