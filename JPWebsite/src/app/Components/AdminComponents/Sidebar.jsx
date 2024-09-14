import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
    return (
        <div className="flex flex-col bg-slate-100">
            <div className="px-2 sm:pl-14 py-3 border border-black">
                <Image src="" width={120} alt='logo' />
            </div>
            <div className="w-2 sm:w-80 h-[100vh] relative py-12 border border-black">
                <div className="w-[50%] sm:w-[80%] absolute right-0">
                    <Link href="/admin/addProduct" className="flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shado-[-5px_5px_0px_#000000]">
                        <Image src="" alt="add_icon" width={28} /> <p>Add blogs</p>
                    </Link>
                    <Link href="/admin/blogList" className=" mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shado-[-5px_5px_0px_#000000]">
                        <Image src="" alt="blog_icon" width={28} /> <p>Liste des articles</p>
                    </Link>
                    <Link href="/admin/subscriptions" className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shado-[-5px_5px_0px_#000000]">
                        <Image src="" alt="email_icon" width={28} /> <p>Adhésion</p>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Sidebar;