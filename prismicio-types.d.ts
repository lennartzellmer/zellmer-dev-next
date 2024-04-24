// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Content for Bio documents
 */
interface BioDocumentData {
  /**
   * Profile Image field in *Bio*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: bio.profile_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  profile_image: prismic.ImageField<never>;

  /**
   * Bio Text field in *Bio*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: bio.bio_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  bio_text: prismic.RichTextField;
}

/**
 * Bio document from Prismic
 *
 * - **API ID**: `bio`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BioDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<BioDocumentData>, "bio", Lang>;

type BlogPostDocumentDataBodySlice = TextSlice | CodeSlice | ImageSlice;

/**
 * Content for Post documents
 */
interface BlogPostDocumentData {
  /**
   * headline field in *Post*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: blog-post.headline
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  headline: prismic.TitleField;

  /**
   * thumbnail field in *Post*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog-post.thumbnail
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  thumbnail: prismic.ImageField<never>;

  /**
   * description field in *Post*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog-post.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Slice Zone field in *Post*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: blog-post.body[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  body: prismic.SliceZone<BlogPostDocumentDataBodySlice> /**
   * meta_title field in *Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog-post.meta_title
   * - **Tab**: Meta
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * meta_description field in *Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog-post.meta_description
   * - **Tab**: Meta
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;
}

/**
 * Post document from Prismic
 *
 * - **API ID**: `blog-post`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogPostDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<BlogPostDocumentData>,
    "blog-post",
    Lang
  >;

type DefaultPageDocumentDataSlicesSlice = TextSlice;

/**
 * Content for Default documents
 */
interface DefaultPageDocumentData {
  /**
   * Slice Zone field in *Default*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: default_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<DefaultPageDocumentDataSlicesSlice> /**
   * Meta Description field in *Default*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: default_page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Default*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: default_page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Default*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: default_page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Default document from Prismic
 *
 * - **API ID**: `default_page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type DefaultPageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<DefaultPageDocumentData>,
    "default_page",
    Lang
  >;

/**
 * Item in *Footer navigation → Menu Links*
 */
export interface FooterNavigationDocumentDataMenuLinksItem {
  /**
   * Link Label field in *Footer navigation → Menu Links*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Link Label...
   * - **API ID Path**: footer_navigation.menu_links[].label
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  label: prismic.RichTextField;

  /**
   * Link field in *Footer navigation → Menu Links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Select a Link...
   * - **API ID Path**: footer_navigation.menu_links[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Content for Footer navigation documents
 */
interface FooterNavigationDocumentData {
  /**
   * `title` field in *Footer navigation*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Menu title...
   * - **API ID Path**: footer_navigation.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Menu Links field in *Footer navigation*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer_navigation.menu_links[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  menu_links: prismic.GroupField<
    Simplify<FooterNavigationDocumentDataMenuLinksItem>
  >;
}

/**
 * Footer navigation document from Prismic
 *
 * - **API ID**: `footer_navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterNavigationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<FooterNavigationDocumentData>,
    "footer_navigation",
    Lang
  >;

type HomeDocumentDataSlicesSlice = LatestBlogPostsSlice | HomeHeaderSlice;

/**
 * Content for Home documents
 */
interface HomeDocumentData {
  /**
   * Slice Zone field in *Home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice> /**
   * Meta Description field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Title field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;

/**
 * Item in *Homepage Intro → gallery*
 */
export interface HomepageIntroDocumentDataGalleryItem {
  /**
   * Image 1 field in *Homepage Intro → gallery*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage_intro.gallery[].image_1
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image_1: prismic.ImageField<never>;

  /**
   * Image 2 field in *Homepage Intro → gallery*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage_intro.gallery[].image_2
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image_2: prismic.ImageField<never>;

  /**
   * Image 3 field in *Homepage Intro → gallery*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage_intro.gallery[].image_3
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image_3: prismic.ImageField<never>;

  /**
   * Image 4 field in *Homepage Intro → gallery*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage_intro.gallery[].image_4
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image_4: prismic.ImageField<never>;

  /**
   * Image 5 field in *Homepage Intro → gallery*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage_intro.gallery[].image_5
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image_5: prismic.ImageField<never>;
}

/**
 * Content for Homepage Intro documents
 */
interface HomepageIntroDocumentData {
  /**
   * Headline field in *Homepage Intro*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage_intro.headline
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  headline: prismic.TitleField;

  /**
   * Description field in *Homepage Intro*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage_intro.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * gallery field in *Homepage Intro*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage_intro.gallery[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  gallery: prismic.GroupField<Simplify<HomepageIntroDocumentDataGalleryItem>>;
}

/**
 * Homepage Intro document from Prismic
 *
 * - **API ID**: `homepage_intro`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageIntroDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageIntroDocumentData>,
    "homepage_intro",
    Lang
  >;

/**
 * Content for Project documents
 */
interface ProjectDocumentData {
  /**
   * Title field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * Link field in *Project*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: project.link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Readable URL field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.readable_url
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  readable_url: prismic.KeyTextField;
}

/**
 * Project document from Prismic
 *
 * - **API ID**: `project`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<ProjectDocumentData>,
    "project",
    Lang
  >;

/**
 * Item in *Settings → keywords*
 */
export interface SettingsDocumentDataKeywordsItem {
  /**
   * keyword field in *Settings → keywords*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.keywords[].keyword
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  keyword: prismic.KeyTextField;
}

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * name field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * description field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * keywords field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.keywords[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  keywords: prismic.GroupField<Simplify<SettingsDocumentDataKeywordsItem>>;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes =
  | BioDocument
  | BlogPostDocument
  | DefaultPageDocument
  | FooterNavigationDocument
  | HomeDocument
  | HomepageIntroDocument
  | ProjectDocument
  | SettingsDocument;

/**
 * Primary content in *Code → Primary*
 */
export interface CodeSliceDefaultPrimary {
  /**
   * code field in *Code → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: code.primary.code
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  code: prismic.RichTextField;

  /**
   * Language field in *Code → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: js
   * - **API ID Path**: code.primary.language
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  language: prismic.SelectField<
    "js" | "ts" | "css" | "json" | "html" | "vue" | "vue-html",
    "filled"
  >;
}

/**
 * Default variation for Code Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CodeSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CodeSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Code*
 */
type CodeSliceVariation = CodeSliceDefault;

/**
 * Code Shared Slice
 *
 * - **API ID**: `code`
 * - **Description**: Code
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CodeSlice = prismic.SharedSlice<"code", CodeSliceVariation>;

/**
 * Primary content in *HomeHeader → Primary*
 */
export interface HomeHeaderSliceDefaultPrimary {
  /**
   * headline field in *HomeHeader → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: This is a headline
   * - **API ID Path**: home_header.primary.headline
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  headline: prismic.TitleField;

  /**
   * description field in *HomeHeader → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: A meaningful description
   * - **API ID Path**: home_header.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Primary content in *HomeHeader → Items*
 */
export interface HomeHeaderSliceDefaultItem {
  /**
   * image field in *HomeHeader → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home_header.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for HomeHeader Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HomeHeaderSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HomeHeaderSliceDefaultPrimary>,
  Simplify<HomeHeaderSliceDefaultItem>
>;

/**
 * Slice variation for *HomeHeader*
 */
type HomeHeaderSliceVariation = HomeHeaderSliceDefault;

/**
 * HomeHeader Shared Slice
 *
 * - **API ID**: `home_header`
 * - **Description**: HomeHeader
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HomeHeaderSlice = prismic.SharedSlice<
  "home_header",
  HomeHeaderSliceVariation
>;

/**
 * Primary content in *Image → Items*
 */
export interface ImageSliceDefaultItem {
  /**
   * Image field in *Image → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for Image Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<ImageSliceDefaultItem>
>;

/**
 * Slice variation for *Image*
 */
type ImageSliceVariation = ImageSliceDefault;

/**
 * Image Shared Slice
 *
 * - **API ID**: `image`
 * - **Description**: Image
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSlice = prismic.SharedSlice<"image", ImageSliceVariation>;

/**
 * Default variation for LatestBlogPosts Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LatestBlogPostsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *LatestBlogPosts*
 */
type LatestBlogPostsSliceVariation = LatestBlogPostsSliceDefault;

/**
 * LatestBlogPosts Shared Slice
 *
 * - **API ID**: `latest_blog_posts`
 * - **Description**: LatestBlogPosts
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LatestBlogPostsSlice = prismic.SharedSlice<
  "latest_blog_posts",
  LatestBlogPostsSliceVariation
>;

/**
 * Primary content in *Text → Primary*
 */
export interface TextSliceDefaultPrimary {
  /**
   * Text field in *Text → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;
}

/**
 * Default variation for Text Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Text*
 */
type TextSliceVariation = TextSliceDefault;

/**
 * Text Shared Slice
 *
 * - **API ID**: `text`
 * - **Description**: Text
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSlice = prismic.SharedSlice<"text", TextSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      BioDocument,
      BioDocumentData,
      BlogPostDocument,
      BlogPostDocumentData,
      BlogPostDocumentDataBodySlice,
      DefaultPageDocument,
      DefaultPageDocumentData,
      DefaultPageDocumentDataSlicesSlice,
      FooterNavigationDocument,
      FooterNavigationDocumentData,
      FooterNavigationDocumentDataMenuLinksItem,
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataSlicesSlice,
      HomepageIntroDocument,
      HomepageIntroDocumentData,
      HomepageIntroDocumentDataGalleryItem,
      ProjectDocument,
      ProjectDocumentData,
      SettingsDocument,
      SettingsDocumentData,
      SettingsDocumentDataKeywordsItem,
      AllDocumentTypes,
      CodeSlice,
      CodeSliceDefaultPrimary,
      CodeSliceVariation,
      CodeSliceDefault,
      HomeHeaderSlice,
      HomeHeaderSliceDefaultPrimary,
      HomeHeaderSliceDefaultItem,
      HomeHeaderSliceVariation,
      HomeHeaderSliceDefault,
      ImageSlice,
      ImageSliceDefaultItem,
      ImageSliceVariation,
      ImageSliceDefault,
      LatestBlogPostsSlice,
      LatestBlogPostsSliceVariation,
      LatestBlogPostsSliceDefault,
      TextSlice,
      TextSliceDefaultPrimary,
      TextSliceVariation,
      TextSliceDefault,
    };
  }
}
