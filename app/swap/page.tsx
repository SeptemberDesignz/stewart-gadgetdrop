"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Phone, Smartphone, CheckCircle, ArrowRight } from "lucide-react";

export default function SwapPage() {
  const [step, setStep] = useState(1);
  const [currentDevice, setCurrentDevice] = useState({
    brand: "",
    model: "",
    storage: "",
    condition: "",
    batteryHealth: "",
    screenCondition: "",
    bodyCondition: "",
  });
  const [desiredDevice, setDesiredDevice] = useState({
    brand: "",
    model: "",
    storage: "",
    color: "",
  });
  const [referenceNumber, setReferenceNumber] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const brands = ["Apple", "Samsung", "Google", "Xiaomi", "Tecno", "Infinix", "Other"];
  const storageOptions = ["64GB", "128GB", "256GB", "512GB", "1TB"];
  const conditions = ["Mint", "Good", "Fair", "Poor"];
  const screenConditions = ["No Scratches", "Minor Scratches", "Scratches", "Cracked"];
  const bodyConditions = ["Flawless", "Minor Scratches", "Scratches", "Dents"];

  const generateReference = () => {
    const prefix = "SGD-SWAP";
    const date = new Date().getFullYear();
    const random = Math.floor(100000 + Math.random() * 900000);
    return `${prefix}-${date}-${random}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = generateReference();
    setReferenceNumber(ref);
    setIsSubmitted(true);
  };

  const handleNextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center text-sm text-gray-500 hover:text-blue-600 mb-4">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Swap Your Phone
          </h1>
          <p className="text-gray-600 mt-2">
            Fill in the details below to start your swap request
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          {[1, 2, 3].map((num) => (
            <div key={num} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  step >= num
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {num}
              </div>
              {num < 3 && (
                <div
                  className={`w-12 h-0.5 ${
                    step > num ? "bg-blue-600" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Success State */}
        {isSubmitted ? (
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center border-2 border-green-200">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Swap Request Submitted!
            </h2>
            <p className="text-gray-600 mb-4">
              Your swap request has been received. We&apos;ll review it and get back to you soon.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-500">Your Reference Number</p>
              <p className="text-2xl font-bold text-blue-600 font-mono">
                {referenceNumber}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="btn-primary text-sm py-3 px-6"
              >
                Back to Home
              </Link>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setStep(1);
                  setCurrentDevice({
                    brand: "",
                    model: "",
                    storage: "",
                    condition: "",
                    batteryHealth: "",
                    screenCondition: "",
                    bodyCondition: "",
                  });
                  setDesiredDevice({
                    brand: "",
                    model: "",
                    storage: "",
                    color: "",
                  });
                }}
                className="btn-secondary text-sm py-3 px-6"
              >
                Submit Another Request
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            
            {/* Step 1: Current Device */}
            {step === 1 && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  <Phone className="inline w-5 h-5 text-blue-600 mr-2" />
                  Your Current Phone
                </h2>
                <p className="text-gray-500 text-sm mb-6">
                  Tell us about the phone you want to trade in
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Brand *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={currentDevice.brand}
                      onChange={(e) =>
                        setCurrentDevice({ ...currentDevice, brand: e.target.value })
                      }
                    >
                      <option value="">Select Brand</option>
                      {brands.map((brand) => (
                        <option key={brand} value={brand}>
                          {brand}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Model *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. iPhone 13, Galaxy S23"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={currentDevice.model}
                      onChange={(e) =>
                        setCurrentDevice({ ...currentDevice, model: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Storage *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={currentDevice.storage}
                      onChange={(e) =>
                        setCurrentDevice({ ...currentDevice, storage: e.target.value })
                      }
                    >
                      <option value="">Select Storage</option>
                      {storageOptions.map((storage) => (
                        <option key={storage} value={storage}>
                          {storage}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Condition *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={currentDevice.condition}
                      onChange={(e) =>
                        setCurrentDevice({ ...currentDevice, condition: e.target.value })
                      }
                    >
                      <option value="">Select Condition</option>
                      {conditions.map((condition) => (
                        <option key={condition} value={condition}>
                          {condition}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Battery Health
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 85% or Good"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={currentDevice.batteryHealth}
                      onChange={(e) =>
                        setCurrentDevice({ ...currentDevice, batteryHealth: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Screen Condition *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={currentDevice.screenCondition}
                      onChange={(e) =>
                        setCurrentDevice({ ...currentDevice, screenCondition: e.target.value })
                      }
                    >
                      <option value="">Select Screen Condition</option>
                      {screenConditions.map((condition) => (
                        <option key={condition} value={condition}>
                          {condition}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Body Condition *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={currentDevice.bodyCondition}
                      onChange={(e) =>
                        setCurrentDevice({ ...currentDevice, bodyCondition: e.target.value })
                      }
                    >
                      <option value="">Select Body Condition</option>
                      {bodyConditions.map((condition) => (
                        <option key={condition} value={condition}>
                          {condition}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="btn-primary text-sm py-2 px-6"
                  >
                    Next Step →
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Desired Phone */}
            {step === 2 && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  <Smartphone className="inline w-5 h-5 text-blue-600 mr-2" />
                  Phone You Want
                </h2>
                <p className="text-gray-500 text-sm mb-6">
                  Tell us which phone you&apos;d like to upgrade to
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Brand *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={desiredDevice.brand}
                      onChange={(e) =>
                        setDesiredDevice({ ...desiredDevice, brand: e.target.value })
                      }
                    >
                      <option value="">Select Brand</option>
                      {brands.map((brand) => (
                        <option key={brand} value={brand}>
                          {brand}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Model *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. iPhone 15 Pro, Galaxy S24"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={desiredDevice.model}
                      onChange={(e) =>
                        setDesiredDevice({ ...desiredDevice, model: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Storage *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={desiredDevice.storage}
                      onChange={(e) =>
                        setDesiredDevice({ ...desiredDevice, storage: e.target.value })
                      }
                    >
                      <option value="">Select Storage</option>
                      {storageOptions.map((storage) => (
                        <option key={storage} value={storage}>
                          {storage}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Color *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Black, Silver, Blue"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={desiredDevice.color}
                      onChange={(e) =>
                        setDesiredDevice({ ...desiredDevice, color: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="mt-6 flex justify-between">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="btn-secondary text-sm py-2 px-6"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="btn-primary text-sm py-2 px-6"
                  >
                    Review Request →
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Review & Submit */}
            {step === 3 && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  <CheckCircle className="inline w-5 h-5 text-blue-600 mr-2" />
                  Review Your Swap Request
                </h2>
                <p className="text-gray-500 text-sm mb-6">
                  Please review your details before submitting
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Phone className="w-4 h-4 text-blue-600 mr-2" />
                      Current Phone
                    </h3>
                    <dl className="space-y-1 text-sm">
                      <div>
                        <dt className="text-gray-500 inline">Brand: </dt>
                        <dd className="inline font-medium text-gray-900">{currentDevice.brand}</dd>
                      </div>
                      <div>
                        <dt className="text-gray-500 inline">Model: </dt>
                        <dd className="inline font-medium text-gray-900">{currentDevice.model}</dd>
                      </div>
                      <div>
                        <dt className="text-gray-500 inline">Storage: </dt>
                        <dd className="inline font-medium text-gray-900">{currentDevice.storage}</dd>
                      </div>
                      <div>
                        <dt className="text-gray-500 inline">Condition: </dt>
                        <dd className="inline font-medium text-gray-900">{currentDevice.condition}</dd>
                      </div>
                      <div>
                        <dt className="text-gray-500 inline">Screen: </dt>
                        <dd className="inline font-medium text-gray-900">{currentDevice.screenCondition}</dd>
                      </div>
                      <div>
                        <dt className="text-gray-500 inline">Body: </dt>
                        <dd className="inline font-medium text-gray-900">{currentDevice.bodyCondition}</dd>
                      </div>
                    </dl>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-4">
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Smartphone className="w-4 h-4 text-blue-600 mr-2" />
                      Desired Phone
                    </h3>
                    <dl className="space-y-1 text-sm">
                      <div>
                        <dt className="text-gray-500 inline">Brand: </dt>
                        <dd className="inline font-medium text-gray-900">{desiredDevice.brand}</dd>
                      </div>
                      <div>
                        <dt className="text-gray-500 inline">Model: </dt>
                        <dd className="inline font-medium text-gray-900">{desiredDevice.model}</dd>
                      </div>
                      <div>
                        <dt className="text-gray-500 inline">Storage: </dt>
                        <dd className="inline font-medium text-gray-900">{desiredDevice.storage}</dd>
                      </div>
                      <div>
                        <dt className="text-gray-500 inline">Color: </dt>
                        <dd className="inline font-medium text-gray-900">{desiredDevice.color}</dd>
                      </div>
                    </dl>
                  </div>
                </div>

                <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                  <p className="text-sm text-yellow-800">
                    <strong>Note:</strong> The final valuation will depend on physical inspection 
                    at our store. This is an estimated top-up amount.
                  </p>
                </div>

                <div className="mt-6 flex justify-between">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="btn-secondary text-sm py-2 px-6"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-8 rounded-lg text-sm transition-colors flex items-center gap-2"
                  >
                    Submit Request
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
}