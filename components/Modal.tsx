"use client";
import {useSearchParams, usePathname} from "next/navigation";
import Link from "next/link";

function Modal() {
    const searchParams = useSearchParams();
    const modal = searchParams.get("disclaimer");
    const pathname = usePathname();

    return (
        <>
            {modal &&
                <dialog
                    className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-arounds">
                    <div className="backdrop-blur bg-black/75 m-auto p-8 rounded-2xl w-5/6 lg:w-auto">
                        <div className="flex flex-col text-white mt-8 mx-8 max-w-[70ch]">
							<h2 className="text-2xl mb-4 font-bold">Disclaimer</h2>
                            <p className="mb-6">Our works are offered free of charge and without any form of monetization. Nakanoista is in no way affiliated or related to mages., or any parties involved in the development of any game we work on.</p>
                            <Link href={pathname}>
                                <button type="button" className="bg-white mt-4 mb-8 rounded-md text-black p-4 font-bold">Close</button>
                            </Link>
                        </div>
                    </div>
                </dialog>
            }
        </>
    );
}

export default Modal;