// import React, { useCallback, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { Button, Input, RTE, Select } from "..";
// import service from "../../appwrite/service";
// import "./PostForm.css";
// // 🌩️ Cloudinary config
// const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
// const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
//
// // 🌩️ Cloudinary upload function
// const uploadToCloudinary = async (file) => {
//   const formData = new FormData();
//   formData.append("file", file);
//   formData.append("upload_preset", UPLOAD_PRESET);
//
//   const res = await fetch(
//     `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
//     {
//       method: "POST",
//       body: formData,
//     },
//   );
//
//   const data = await res.json();
//
//   if (!data.secure_url) {
//     throw new Error("Image upload failed");
//   }
//
//   return data.secure_url;
// };
//
// export default function PostForm({ post }) {
//   const { register, handleSubmit, setValue, getValues, control, watch } =
//     useForm({
//       defaultValues: {
//         title: post?.title || "",
//         content: post?.content || "",
//         status: post?.status || "active",
//         slug: post?.$id || "",
//       },
//     });
//
//   const navigate = useNavigate();
//   const userData = useSelector((state) => state.auth.userData);
//
//   const submit = async (data) => {
//     if (!userData?.$id) {
//       navigate("/login");
//       return;
//     }
//
//     try {
//       // ========================
//       // ✏️ UPDATE POST
//       // ========================
//       if (post) {
//         let imageUrl = post.featuredImage;
//
//         if (data.image?.[0]) {
//           imageUrl = await uploadToCloudinary(data.image[0]);
//         }
//
//         const dbPost = await service.updatePost(post.$id, {
//           title: data.title,
//           content: data.content,
//           status: data.status,
//           featuredImage: imageUrl,
//         });
//
//         if (dbPost) {
//           navigate(`/post/${dbPost.$id}`);
//         }
//       }
//
//       // ========================
//       // ➕ CREATE POST
//       // ========================
//       else {
//         const imageUrl = await uploadToCloudinary(data.image[0]);
//
//         const dbPost = await service.createPost({
//           title: data.title,
//           content: data.content,
//           status: data.status,
//           slug: data.slug,
//           featuredImage: imageUrl,
//           userId: userData.$id,
//         });
//
//         if (dbPost) {
//           navigate(`/post/${dbPost.$id}`);
//         }
//       }
//     } catch (error) {
//       console.log("POST ERROR:", error);
//     }
//   };
//
//   // slug generator
//   const slugTransform = useCallback((value) => {
//     if (value && typeof value === "string")
//       return value
//         .trim()
//         .toLowerCase()
//         .replace(/[^a-zA-Z\d\s]+/g, "-")
//         .replace(/\s/g, "-");
//
//     return "";
//   }, []);
//
//   useEffect(() => {
//     const subscription = watch((value, { name }) => {
//       if (name === "title") {
//         setValue("slug", slugTransform(value.title), {
//           shouldValidate: true,
//         });
//       }
//     });
//
//     return () => subscription.unsubscribe();
//   }, [watch, slugTransform, setValue]);
//
//   return (
//     <form onSubmit={handleSubmit(submit)} className="post-form">
//       <div className="post-form__main">
//         <Input
//           label="Title :"
//           placeholder="Title"
//           className="mb-4"
//           {...register("title", { required: true })}
//         />
//
//         <Input
//           label="Slug :"
//           placeholder="Slug"
//           className="mb-4"
//           {...register("slug", { required: true })}
//           onInput={(e) => {
//             setValue("slug", slugTransform(e.currentTarget.value), {
//               shouldValidate: true,
//             });
//           }}
//         />
//
//         <RTE
//           label="Content :"
//           name="content"
//           control={control}
//           defaultValue={getValues("content")}
//         />
//       </div>
//
//       <div className="post-form__sidebar">
//         <Input
//           label="Featured Image :"
//           type="file"
//           className="mb-4"
//           accept="image/png, image/jpg, image/jpeg, image/gif"
//           {...register("image", { required: !post })}
//         />
//
//         {post && (
//           <div className="post-form__preview">
//             <img
//               src={post.featuredImage}
//               alt={post.title}
//               className="rounded-lg"
//             />
//           </div>
//         )}
//
//         <Select
//           options={["active", "inactive"]}
//           label="Status"
//           className="mb-4"
//           {...register("status", { required: true })}
//         />
//
//         <Button
//           type="submit"
//           bgColor={post ? "bg-green-500" : undefined}
//           className="w-full"
//         >
//           {post ? "Update" : "Submit"}
//         </Button>
//       </div>
//     </form>
//   );
// }
import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RTE } from "..";
import service from "../../appwrite/service";
import "./PostForm.css";

// Cloudinary
const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

const uploadToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
    { method: "POST", body: formData },
  );

  const data = await res.json();

  if (!data.secure_url) throw new Error("Upload failed");

  return data.secure_url;
};

export default function PostForm({ post }) {
  const { register, handleSubmit, setValue, getValues, control, watch } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        content: post?.content || "",
        status: post?.status || "active",
        slug: post?.$id || post?.slug || "",
      },
    });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    if (!userData?.$id) {
      navigate("/login");
      return;
    }

    try {
      // ================= UPDATE =================
      if (post) {
        let imageUrl = post.featuredImage;

        if (data.image?.[0]) {
          imageUrl = await uploadToCloudinary(data.image[0]);
        }

        const dbPost = await service.updatePost(post.$id, {
          title: data.title,
          content: data.content,
          status: data.status,
          featuredImage: imageUrl,
        });

        if (dbPost) navigate(`/post/${dbPost.$id}`);
      }

      // ================= CREATE =================
      else {
        const imageUrl = await uploadToCloudinary(data.image[0]);

        const dbPost = await service.createPost({
          title: data.title,
          content: data.content,
          status: data.status,
          slug: data.slug,
          featuredImage: imageUrl,
          userId: userData.$id,
        });

        if (dbPost) navigate(`/post/${dbPost.$id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // slug
  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");

    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), {
          shouldValidate: true,
        });
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <form onSubmit={handleSubmit(submit)} className="post-form">
      {/* MAIN */}
      <div className="post-form__main">
        <div className="post-form__field">
          <label className="post-form__label">Title</label>
          <input
            className="post-form__input"
            {...register("title", { required: true })}
          />
        </div>

        <div className="post-form__field">
          <label className="post-form__label">Slug</label>
          <input
            className="post-form__input"
            {...register("slug", { required: true })}
            onInput={(e) =>
              setValue("slug", slugTransform(e.target.value), {
                shouldValidate: true,
              })
            }
          />
        </div>

        <div className="post-form__field">
          <label className="post-form__label">Content</label>
          <RTE
            name="content"
            control={control}
            defaultValue={getValues("content")}
          />
        </div>
      </div>

      {/* SIDEBAR */}
      <div className="post-form__sidebar">
        <div className="post-form__field">
          <label className="post-form__label">Featured Image</label>

          <label className="post-form__file-label">
            <strong>Upload Image</strong>
            <span>PNG / JPG / JPEG</span>

            <input
              type="file"
              className="post-form__file-input"
              accept="image/*"
              {...register("image", { required: !post })}
            />
          </label>
        </div>

        {post?.featuredImage && (
          <div className="post-form__preview">
            <img src={post.featuredImage} alt="preview" />
          </div>
        )}

        <div className="post-form__field">
          <label className="post-form__label">Status</label>
          <select
            className="post-form__select"
            {...register("status", { required: true })}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <button type="submit" className="post-form__btn post-form__btn--submit">
          {post ? "Update Post" : "Publish Post"}
        </button>
      </div>
    </form>
  );
}
