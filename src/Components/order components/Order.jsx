import React from "react";
import razor from "../../Assets/Images/icons/razor.png";

const Order = () => {
  return (
    <div>
      <h1 className="text-center">Order Confirmation</h1>
      <section class="py-12 sm:py-16 lg:py-20">
        <div class="mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-center "></div>

          <div class="mx-auto mt-8 max-w-md md:mt-12 ">
            <div class="rounded-xl  shadow-lg bg-blue-100">
              <h1 class="text-2xl font-semibold text-gray-900 pl-10 pt-5">
                Items
              </h1>
              <div class="px-4 py-6 sm:px-8 sm:py-10">
                <div class="flow-root">
                  <ul class="-my-8">
                    <li class="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                      <div class="shrink-0 relative">
                        <img
                          class="h-24 w-24 max-w-full rounded-lg object-cover"
                          src="https://images.unsplash.com/photo-1588484628369-dd7a85bfdc38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNuZWFrZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=150&q=60"
                          alt=""
                        />
                      </div>

                      <div class="relative flex flex-1 flex-col justify-between">
                        <div class="sm:col-gap-5 sm:grid sm:grid-cols-2">
                          <div class="pr-8 sm:pr-5">
                            <p class="text-base font-semibold text-gray-900">
                              Black Clove
                            </p>
                            <p class="mx-0 mt-1 mb-0 text-sm text-gray-400">
                              In Stock | 1KG
                            </p>
                          </div>

                          <div class="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                            <p class="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                              $25.00
                            </p>
                          </div>
                        </div>

                        <div class="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                          <button
                            type="button"
                            class="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
                          >
                            Qty: 1
                          </button>
                        </div>
                      </div>
                    </li>
                    <li class="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                      <div class="shrink-0 relative">
                        <img
                          class="h-24 w-24 max-w-full rounded-lg object-cover"
                          src="https://images.unsplash.com/photo-1588484628369-dd7a85bfdc38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNuZWFrZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=150&q=60"
                          alt=""
                        />
                      </div>

                      <div class="relative flex flex-1 flex-col justify-between">
                        <div class="sm:col-gap-5 sm:grid sm:grid-cols-2">
                          <div class="pr-8 sm:pr-5">
                            <p class="text-base font-semibold text-gray-900">
                              Black Clove
                            </p>
                            <p class="mx-0 mt-1 mb-0 text-sm text-gray-400">
                              In Stock | 1KG
                            </p>
                          </div>

                          <div class="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                            <p class="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                              $25.00
                            </p>
                          </div>
                        </div>

                        <div class="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                          <button
                            type="button"
                            class="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
                          >
                            Qty: 1
                          </button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <hr class="mx-0 mt-6 mb-0 h-0" />
                <h1 class="text-2xl font-semibold text-gray-900 pt-5">
                  Payment
                </h1>
                <div className="flex mt-3">
                  <img src={razor} alt="" width={60} />
                  <div className="flex flex-col text-gray-500">
                    <span>Razor Pay</span>
                    <span>**** 1234</span>
                  </div>
                </div>

                <h1 class="text-2xl mt-5 font-semibold text-gray-900 pt-5">
                  Delivery Address
                </h1>
                <ul className="mt-3 text-gray-700">
                  <li class="text-lg font-medium ">Belfin Baby</li>
                  {/* Name & other details  */}
                  <li>Cherupuzha, Kannur, 670690</li>
                  <li class="text-gray-500">847 Jewes Bridge</li>
                  <li class="text-gray-500">Apt. 17 London</li>
                  <li class="text-gray-500">UK 474-769-3919</li>
                </ul>

                <h1 class="text-2xl mt-5 font-semibold text-gray-900 pt-5">
                  Order Summary
                </h1>
                <div class="mt-6 space-y-3 pb-8 px-6 rounded-md bg-white">
                  <h1 className="border-b border-gray-300 text-gray-700  py-2">
                    Summary
                  </h1>
                  <div class="flex items-center justify-between text-gray-600">
                    <p class="">Order</p>
                    <p class="font-semibold ">$239.00</p>
                  </div>
                  <div class="flex items-center justify-between text-gray-600">
                    <p class="">Delivery</p>
                    <p class="font-semibold ">$5.30</p>
                  </div>
                  <div class="flex items-center justify-between text-gray-600">
                    <p class="">Discount</p>
                    <p class="font-semibold ">$12.00</p>
                  </div>
                  <div class="flex items-center justify-between text-gray-600">
                    <p class="">GST Tax</p>
                    <p class="font-semibold ">$2.00</p>
                  </div>
                  <div class="flex items-center font-bold justify-between text-black pt-5">
                    <p class="">Total</p>
                    <p class=" ">$2.00</p>
                  </div>
                </div>
                <div class="mt-6 flex items-center justify-between">
                  <p class="text-sm  text-gray-500">
                    * You will be redirected to Razor Pay payment gateway and
                    then redirected back to our website .
                  </p>
                </div>

                <div class="mt-6 text-center">
                  <button
                    type="button"
                    class="group inline-flex w-full items-center justify-center rounded-md bg-blue-700 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                  >
                    Place Order
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;