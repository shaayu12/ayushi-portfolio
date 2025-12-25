export default function Education() {
  return (
    <section className="max-w-4xl">
      <h2 className="text-3xl font-semibold mb-8">Education</h2>

      <div className="space-y-6">

        {/* MCA */}
        <div className="border border-gray-200 rounded-xl p-6 bg-white">
          <h3 className="text-lg font-medium">
            Master of Computer Applications (MCA)
          </h3>

          <p className="text-sm text-gray-500 mb-1">
            KIET Group of Institutions, Ghaziabad
          </p>

          <p className="text-sm text-gray-600">
            Jan 2019
          </p>
        </div>

        {/* BCA */}
        <div className="border border-gray-200 rounded-xl p-6 bg-white">
          <h3 className="text-lg font-medium">
            Bachelor of Computer Applications (BCA)
          </h3>

          <p className="text-sm text-gray-500 mb-1">
            Dr. K.N. Modi Institute of Engineering & Technology, Modinagar
          </p>

          <p className="text-sm text-gray-600">
            Jan 2017
          </p>
           </div>
           
                   {/* 12th */}
        <div className="border border-gray-200 rounded-xl p-6 bg-white">
          <h3 className="text-lg font-medium">
            Senior Secondary Education (Class XII)
          </h3>
          <p className="text-sm text-gray-500 mb-1">
            TRM Public School, Modinagar
          </p>
          <p className="text-sm text-gray-600">
            2014
          </p>
        </div>

        {/* 10th */}
        <div className="border border-gray-200 rounded-xl p-6 bg-white">
          <h3 className="text-lg font-medium">
            Secondary Education (Class X)
          </h3>
          <p className="text-sm text-gray-500 mb-1">
            TRM Public School
          </p>
          <p className="text-sm text-gray-600">
            2012
          </p>
        </div>

      </div>
    </section>
  );
}
