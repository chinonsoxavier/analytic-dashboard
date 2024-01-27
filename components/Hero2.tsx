import React from 'react'
import navbarUserImage from "../public/images/jordan-2x.webp";
import navbarUserImage2 from "../public/images/jenny-2x.webp";
import navbarUserImage3 from "../public/images/scarlett-2x.webp";
import navbarUserImage4 from "../public/images/christina-2x.webp";
import Image from 'next/image';

const Hero2 = () => {

    const data = [
      {
        name: "Jaydon Vaccaro",
        price: "120.00",
        image: navbarUserImage,
        status: "Paid",
      },
      {
        name: "Marcus Bergson",
        price: "890.00",
        image: navbarUserImage2,
        status: "Paid",
      },
      {
        name: "Corey Schleifer",
        price: "989.000",
        image: navbarUserImage3,
        status: "Refund",
      },
      {
        name: "Cooper Press",
        price: "100.000",
        image: navbarUserImage,
        status: "Refund",
      },
      {
        name: "Phillip Lubin",
        price: "090.000",
        image: navbarUserImage4,
        status: "Paid",
      },
      {
        name: "Jaydon Vaccaro",
        price: "78.00",
        image: navbarUserImage2,
        status: "Refund",
      },
      {
        name: "Corey Schleifer",
        price: "150.00",
        image: navbarUserImage3,
        status: "Paid",
      },
    ];

  return (
    <div className="w-full p-5 plus_jakarta_sans_semibold ">
      <div className="flex items-start gap-4 flex-wrap justify-between h-[400px] ">
        <div className=" bg-white flex-1 flex items-center justify-start flex-col gap-[2px] rounded-lg border w-full h-full border-primary_border box-border p-4 ">
          <div className="h-full flex flex-col items-center justify-between w-full">
            <div className="flex pb-2  items-center justify-between w-full">
              <p className="plus_jakarta_sans_semibold font-semibold text-lg text-[#26282C] tablet:text-base">
                Last Orders
              </p>
              <p className="plus_jakarta_sans_semibold font-medium text-[#34CAA5] text-lg cursor-pointer tablet:text-base">
                See All
              </p>
            </div>
            <div className="overflow-y-auto custom_scrollbar  items-center justify-center h-full flex-col w-full">
              <div className="min-w-[600px] h-full w-full">
                <div
                  style={{ gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr" }}
                  className="h-[12%] border-b grid border-primary_border w-full pb-2"
                >
                  <div className="flex items-start justify-start">
                    <p className="text-[#9CA4AB] w-full text-base font-medium tablet:text-sm">
                      Name
                    </p>
                  </div>
                  <div className="flex items-start justify-start">
                    <p className="text-[#9CA4AB] w-full text-base font-medium tablet:text-sm">
                      Date
                    </p>
                  </div>
                  <div className="flex items-start justify-start">
                    <p className="text-[#9CA4AB] w-full text-base font-medium tablet:text-sm">
                      Amount
                    </p>
                  </div>
                  <div className="flex items-start justify-start">
                    <p className="text-[#9CA4AB] w-full text-base font-medium tablet:text-sm">
                      Status
                    </p>
                  </div>
                  <div className="w-[40px] flex items-start justify-start">
                    <p className="text-[#9CA4AB] w-full text-base font-medium tablet:text-sm">
                      Invoice
                    </p>
                  </div>
                </div>
                <div className="w-full h-[88%] overflow-y-scroll custom_scrollbar">
                  <div className="w-full h-full ">
                    {data.map((item, index) => (
                      <div
                        key={index}
                        style={{ gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr" }}
                        className="border-b grid align-middle justify-center  border-primary_border w-full py-2 "
                      >
                        <div className="flex  items-center justify-center gap-2">
                          <div className="w-8 h-8 rounded-full ">
                            <Image
                              src={item.image}
                              alt="user profile image"
                              className="object-contain w-full h-full"
                            />
                          </div>
                          <p className="text-[#3A3F51] w-full text-base font-medium whitespace-nowrap md:text-sm tablet:text-sm">
                            {item.name}
                          </p>
                        </div>
                        <div className="flex items-center justify-start">
                          <p className="text-[#3A3F51] w-full text-base font-medium md:text-sm tablet:text-sm">
                            Nov 15,2023
                          </p>
                        </div>
                        <div className="flex items-center justify-start">
                          <p className="text-[#3A3F51] w-full text-base font-semibold md:text-sm tablet:text-sm">
                            ${item.price}
                          </p>
                        </div>
                        <div className="flex items-center justify-start">
                          <p style={{color:item.status==='Paid'?"#34CAA5":"#ED544E"}} className="w-full text-base font-normal md:text-sm tablet:text-sm"  >
                            {item.status}
                          </p>
                        </div>
                        <div className="flex items-center justify-center gap-[6px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M6 11.8334C5.93333 11.8334 5.87333 11.82 5.80667 11.7934C5.62 11.72 5.5 11.5334 5.5 11.3334V7.33337C5.5 7.06004 5.72667 6.83337 6 6.83337C6.27333 6.83337 6.5 7.06004 6.5 7.33337V10.1267L6.98 9.64671C7.17333 9.45337 7.49333 9.45337 7.68667 9.64671C7.88 9.84004 7.88 10.16 7.68667 10.3534L6.35333 11.6867C6.26 11.78 6.12667 11.8334 6 11.8334Z"
                              fill="#292D32"
                            />
                            <path
                              d="M5.99964 11.8334C5.87297 11.8334 5.7463 11.7867 5.6463 11.6867L4.31297 10.3534C4.11964 10.16 4.11964 9.84004 4.31297 9.64671C4.5063 9.45338 4.8263 9.45338 5.01964 9.64671L6.35297 10.98C6.5463 11.1734 6.5463 11.4934 6.35297 11.6867C6.25297 11.7867 6.1263 11.8334 5.99964 11.8334Z"
                              fill="#292D32"
                            />
                            <path
                              d="M9.99967 15.1667H5.99967C2.37967 15.1667 0.833008 13.62 0.833008 10V6.00004C0.833008 2.38004 2.37967 0.833374 5.99967 0.833374H9.33301C9.60634 0.833374 9.83301 1.06004 9.83301 1.33337C9.83301 1.60671 9.60634 1.83337 9.33301 1.83337H5.99967C2.92634 1.83337 1.83301 2.92671 1.83301 6.00004V10C1.83301 13.0734 2.92634 14.1667 5.99967 14.1667H9.99967C13.073 14.1667 14.1663 13.0734 14.1663 10V6.66671C14.1663 6.39337 14.393 6.16671 14.6663 6.16671C14.9397 6.16671 15.1663 6.39337 15.1663 6.66671V10C15.1663 13.62 13.6197 15.1667 9.99967 15.1667Z"
                              fill="#292D32"
                            />
                            <path
                              d="M14.6663 7.1667H11.9997C9.71967 7.1667 8.83301 6.28003 8.83301 4.00003V1.33337C8.83301 1.13337 8.95301 0.9467 9.13967 0.873366C9.32634 0.793366 9.53967 0.840033 9.68634 0.980033L15.0197 6.31337C15.1597 6.45337 15.2063 6.67337 15.1263 6.86003C15.0463 7.0467 14.8663 7.1667 14.6663 7.1667ZM9.83301 2.54003V4.00003C9.83301 5.72003 10.2797 6.1667 11.9997 6.1667H13.4597L9.83301 2.54003Z"
                              fill="#292D32"
                            />
                          </svg>
                          <p className="text-[#3A3F51] w-full text-sm font-normal md:text-sm tablet:text-sm">
                            View
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='bg-white hidden special:flex items-center justify-center flex-col border border-primary_border rounded-lg w-full h-full p-2' ></div> */}
        <div className="xl:basis-[350px] xl:flex-1 w-full h-full bg-white border border-primary_border rounded-lg  box-border p-4  ">
          <div className="flex items-center justify-between w-full mb-3 h-[12%]">
            <p className="plus_jakarta_sans_semibold font-semibold text-lg text-[#26282C] tablet:text-base xs:text-sm">
              Top Platforms
            </p>
            <div className="flex items-center justify-center gap-2">
              <p className="plus_jakarta_sans_semibold font-medium text-lg text-[#34CAA5] cursor-pointer tablet:text-base xs:text-sm">
                See All
              </p>
            </div>
          </div>
          <div className="w-full h-[88%] custom_scrollbar overflow-y-auto">
            {/* {data.map((item, i) => ( */}
            <div className="gap-2 flex flex-col items-start justify-start">
              <div>
                <p className="text-lg font-medium text-[#22242C] text-left tablet:text-sm">
                  Artisan Aisle
                </p>
              </div>
              <div className="w-full rounded-full h-2 tablet:h-[5px] relative bg-[#F5F5F5]">
                <div className="absolute rounded-full h-full w-[60%] bg-[#6160DC] left-0"></div>
              </div>
              <div className="flex items-center justify-between w-full">
                <p className="text-sm font-normal tablet:text-xs">
                  {" "}
                  $2,500,000
                </p>
                <p className="text-sm font-normal tablet:text-xs"> + 15%</p>
              </div>
            </div>
            <div className="gap-2 flex flex-col items-start justify-start">
              <div>
                <p className="text-lg font-medium tablet:text-[.975rem] text-[#22242C] text-left">
                  Toy Troop
                </p>
              </div>
              <div className="w-full rounded-full h-2 tablet:h-[5px] relative bg-[#F5F5F5]">
                <div className="absolute rounded-full h-full w-[40%] bg-[#FFB74A] left-0"></div>
              </div>
              <div className="flex items-center justify-between w-full">
                <p className="text-sm font-normal tablet:text-xs">
                  {" "}
                  $1,800,000
                </p>
                <p className="text-sm font-normal tablet:text-xs"> + 10%</p>
              </div>
            </div>
            <div className="gap-2 flex flex-col items-start justify-start">
              <div>
                <p className="text-lg tablet:text-base font-medium text-[#22242C] text-left">
                  XStore
                </p>
              </div>
              <div className="w-full rounded-full h-2 tablet:h-[5px] relative bg-[#F5F5F5]">
                <div className="absolute rounded-full h-full w-[30%] bg-[#FF4A55] left-0"></div>
              </div>
              <div className="flex items-center justify-between w-full">
                <p className="text-sm font-normal tablet:text-xs">
                  {" "}
                  $1,200,000
                </p>
                <p className="text-sm font-normal tablet:text-xs"> + 8%</p>
              </div>
            </div>
            <div className="gap-2 flex flex-col items-start justify-start">
              <div>
                <p className="text-lg tablet:text-base font-medium text-[#22242C] text-left">
                  Micheal Barnes
                </p>
              </div>
              <div className="w-full rounded-full h-2 tablet:h-[5px] relative bg-[#F5F5F5]">
                <div className="absolute rounded-full h-full w-[80%] bg-[#54C5EB] left-0"></div>
              </div>
              <div className="flex items-center justify-between w-full">
                <p className="text-sm font-normal tablet:text-xs ">
                  {" "}
                  $1,200,000
                </p>
                <p className="text-sm font-normal tablet:text-xs"> + 26%</p>
              </div>
            </div>
            <div className="gap-2 flex flex-col items-start justify-start">
              <div>
                <p className="text-lg tablet:text-base font-medium text-[#22242C] text-left">
                  Micheal Barnes
                </p>
              </div>
              <div className="w-full rounded-full h-2 tablet:h-[5px] relative bg-[#F5F5F5]">
                <div className="absolute rounded-full h-full w-[10%] bg-[#FFB74A] left-0"></div>
              </div>
              <div className="flex items-center justify-between w-full">
                <p className="text-sm font-normal tablet:text-xs">
                  {" "}
                  $1,900,000
                </p>
                <p className="text-sm font-normal tablet:text-xs"> + 20%</p>
              </div>
            </div>
            <div className="gap-2 flex flex-col items-start justify-start">
              <div>
                <p className="text-lg tablet:text-base font-medium text-[#22242C] text-left">
                  Justin Doe
                </p>
              </div>
              <div className="w-full rounded-full h-2 tablet:h-[5px] relative bg-[#F5F5F5]">
                <div className="absolute rounded-full h-full w-[10%] bg-[#6160DC] left-0"></div>
              </div>
              <div className="flex items-center justify-between w-full">
                <p className="text-sm font-normal tablet:text-xs">
                  {" "}
                  $1,000,000
                </p>
                <p className="text-sm font-normal tablet:text-xs"> + 6%</p>
              </div>
            </div>
            {/* ))} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero2