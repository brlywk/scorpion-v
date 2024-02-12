<script setup lang="ts">
definePageMeta({
    layout: "dashboard",
});

const uiNotificationStore = useUiNotificationStore();
const { addNotification } = uiNotificationStore;

const uiDialogStore = useUiDialogStore();
const { userResponse } = storeToRefs(uiDialogStore);
const { newDialog } = uiDialogStore;
</script>

<template>
    <MainWrapper>
        <ScrollToTop />

        <h1 class="font-xl font-bold">
            Welcome to the dashboard page
        </h1>
        <ExpensesList />

        <hr>

        <UiNotifications />
        <div class="flex flex-row gap-4 py-4">
            <button @click="addNotification('info', `Hello there ${Math.floor(Math.random() * 42)}`)">
                Add info
            </button>
            <button @click="addNotification('success', `Hello there ${Math.floor(Math.random() * 42)}`)">
                Add success
            </button>
            <button @click="addNotification('warning', `Hello there ${Math.floor(Math.random() * 42)}`)">
                Add warning
            </button>
            <button @click="addNotification('error', `Hello there ${Math.floor(Math.random() * 42)}`)">
                Add error
            </button>
        </div>

        <hr>

        <UiDialog />
        <div class="flex flex-row gap-4 py-4">
            <button @click="newDialog('info', 'Sup?', 'All cool?')">
                Dialog info
            </button>
            <button @click="newDialog('question', 'Sup?', 'All cool?')">
                Dialog question
            </button>
            <button @click="newDialog('warning', 'Sup?', 'All cool?')">
                Dialog warning
            </button>
        </div>
        <pre>{{ userResponse }}</pre>

        <p class="my-16">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod tempore id ipsam labore, dolore ratione.
            Obcaecati ad, nemo atque cupiditate sed necessitatibus blanditiis autem omnis at facere maiores vitae tenetur.
            Libero asperiores vel quisquam iure ullam cumque, in labore minima molestiae facilis quae odit commodi repellat
            hic voluptatum vero error ad maxime excepturi numquam? Voluptatem autem tenetur ea illum magnam.
            Repellendus neque odio officiis optio pariatur dolores commodi. Libero esse, vitae ipsam ratione quam nulla
            sapiente molestiae id nisi quisquam quis sunt accusamus error reiciendis voluptas! Mollitia cupiditate dolor
            eum?
            Nihil, eveniet? Quibusdam est aperiam sequi! Accusantium, libero architecto tempore ducimus odit explicabo
            reprehenderit officia velit aliquid. Quis numquam nulla illo voluptates tempore sed quibusdam, earum tempora
            nihil, ea et.
            Ipsum laborum dicta quasi consequuntur earum error, voluptatem eveniet amet debitis architecto dolore nemo ad
            dignissimos sequi, necessitatibus doloremque ullam odio? Iure sint labore exercitationem, aspernatur corporis
            similique voluptatibus magnam.
            Exercitationem iste at nostrum nam voluptas praesentium voluptatem placeat modi et sequi iusto inventore rem
            dolor assumenda minima ex reiciendis, non numquam similique voluptate consequatur, alias, obcaecati fuga nemo?
            Delectus?
            Molestias numquam voluptatem esse assumenda cumque enim illo eaque? Vero neque reiciendis fuga quia alias ipsum
            iste, esse minus expedita ab impedit quo nemo quos sapiente rem deleniti accusamus nesciunt.
            Tempora qui veniam nisi blanditiis similique quo dolorem, totam eos in voluptatibus ea quisquam amet, iste ipsam
            odit, nihil voluptates esse dolor voluptatem delectus et porro. Porro, obcaecati. Quod, ab?
            Cupiditate iure mollitia sit maiores earum odio voluptatem, aliquam molestiae illo magnam pariatur beatae
            doloribus veritatis tempora vitae architecto eius culpa aliquid. Nisi, expedita. Fugiat nam necessitatibus porro
            eaque suscipit.
            Sit tempore temporibus in, cumque alias iusto provident, enim vel eum qui dolorum quaerat aspernatur,
            perspiciatis necessitatibus nisi? Debitis magnam laboriosam hic rerum provident, qui cum assumenda ab nam? Illo?
            Architecto, reprehenderit aliquid sed dolorum nulla aperiam eos ullam tempore, est itaque distinctio totam.
            Velit consectetur necessitatibus, ad tempora voluptas ut incidunt quam eos labore, qui eveniet. Et, nostrum
            error?
            Quibusdam amet doloribus animi earum placeat doloremque expedita, dolorem praesentium totam ipsum,
            necessitatibus officiis officia, deserunt itaque tenetur quam dignissimos in cupiditate excepturi perferendis
            aspernatur! Veniam facilis aspernatur quasi doloremque.
            Doloribus quas, sapiente sed odio iusto porro repellat nihil velit, aliquid eos praesentium excepturi? Officiis,
            quo. Dolores reprehenderit tempora, autem modi repudiandae ex fugiat? Porro nisi facere amet accusantium
            molestias.
            Quas libero voluptatum eveniet inventore at repudiandae voluptatem ad modi corporis, dolore, odit magni quo
            voluptatibus quaerat distinctio qui aliquid laborum incidunt. Praesentium aspernatur cumque, deserunt aut
            necessitatibus voluptas. Voluptate.
            Fugit harum vero nobis eveniet a! Nisi possimus optio dolores numquam illo sequi autem, quibusdam fugiat
            pariatur, alias neque consectetur quaerat deserunt. Debitis numquam, qui dolorem aut nulla maxime labore!
            Omnis deleniti quasi nihil excepturi architecto, eum repellat unde dolores exercitationem quis, sequi recusandae
            repellendus placeat modi quisquam quam mollitia magnam accusantium cum, commodi sit. Dolorum ad itaque
            cupiditate consequatur.
            Quis unde corporis aliquid, animi possimus perspiciatis. Inventore, quo! Distinctio, aspernatur necessitatibus
            tenetur, adipisci sint ipsa a dolor commodi veniam dolores consequatur error voluptatum recusandae delectus
            iste, nam fuga veritatis?
            Nobis et facilis fugit, quo quibusdam voluptatum ducimus debitis molestiae quia cum ipsum delectus ad odit
            aliquid ut sint architecto deleniti, adipisci laudantium nemo sequi eius. Officiis doloremque quo laborum?
            Nisi error quibusdam perspiciatis facilis quisquam explicabo voluptates ea ad blanditiis sint eaque deserunt
            libero distinctio tenetur fuga mollitia velit iste, praesentium ullam cupiditate? Nam molestiae vel consequuntur
            rem error.
            Quaerat adipisci non, impedit modi doloribus blanditiis a ullam atque nam asperiores aspernatur, tempore,
            officia error sunt quo corporis accusamus eos laudantium quasi necessitatibus fuga exercitationem sint fugit.
            Sed, sit?
        </p>
        <p class="my-16">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod tempore id ipsam labore, dolore ratione.
            Obcaecati ad, nemo atque cupiditate sed necessitatibus blanditiis autem omnis at facere maiores vitae tenetur.
            Libero asperiores vel quisquam iure ullam cumque, in labore minima molestiae facilis quae odit commodi repellat
            hic voluptatum vero error ad maxime excepturi numquam? Voluptatem autem tenetur ea illum magnam.
            Repellendus neque odio officiis optio pariatur dolores commodi. Libero esse, vitae ipsam ratione quam nulla
            sapiente molestiae id nisi quisquam quis sunt accusamus error reiciendis voluptas! Mollitia cupiditate dolor
            eum?
            Nihil, eveniet? Quibusdam est aperiam sequi! Accusantium, libero architecto tempore ducimus odit explicabo
            reprehenderit officia velit aliquid. Quis numquam nulla illo voluptates tempore sed quibusdam, earum tempora
            nihil, ea et.
            Ipsum laborum dicta quasi consequuntur earum error, voluptatem eveniet amet debitis architecto dolore nemo ad
            dignissimos sequi, necessitatibus doloremque ullam odio? Iure sint labore exercitationem, aspernatur corporis
            similique voluptatibus magnam.
            Exercitationem iste at nostrum nam voluptas praesentium voluptatem placeat modi et sequi iusto inventore rem
            dolor assumenda minima ex reiciendis, non numquam similique voluptate consequatur, alias, obcaecati fuga nemo?
            Delectus?
            Molestias numquam voluptatem esse assumenda cumque enim illo eaque? Vero neque reiciendis fuga quia alias ipsum
            iste, esse minus expedita ab impedit quo nemo quos sapiente rem deleniti accusamus nesciunt.
            Tempora qui veniam nisi blanditiis similique quo dolorem, totam eos in voluptatibus ea quisquam amet, iste ipsam
            odit, nihil voluptates esse dolor voluptatem delectus et porro. Porro, obcaecati. Quod, ab?
            Cupiditate iure mollitia sit maiores earum odio voluptatem, aliquam molestiae illo magnam pariatur beatae
            doloribus veritatis tempora vitae architecto eius culpa aliquid. Nisi, expedita. Fugiat nam necessitatibus porro
            eaque suscipit.
            Sit tempore temporibus in, cumque alias iusto provident, enim vel eum qui dolorum quaerat aspernatur,
            perspiciatis necessitatibus nisi? Debitis magnam laboriosam hic rerum provident, qui cum assumenda ab nam? Illo?
            Architecto, reprehenderit aliquid sed dolorum nulla aperiam eos ullam tempore, est itaque distinctio totam.
            Velit consectetur necessitatibus, ad tempora voluptas ut incidunt quam eos labore, qui eveniet. Et, nostrum
            error?
            Quibusdam amet doloribus animi earum placeat doloremque expedita, dolorem praesentium totam ipsum,
            necessitatibus officiis officia, deserunt itaque tenetur quam dignissimos in cupiditate excepturi perferendis
            aspernatur! Veniam facilis aspernatur quasi doloremque.
            Doloribus quas, sapiente sed odio iusto porro repellat nihil velit, aliquid eos praesentium excepturi? Officiis,
            quo. Dolores reprehenderit tempora, autem modi repudiandae ex fugiat? Porro nisi facere amet accusantium
            molestias.
            Quas libero voluptatum eveniet inventore at repudiandae voluptatem ad modi corporis, dolore, odit magni quo
            voluptatibus quaerat distinctio qui aliquid laborum incidunt. Praesentium aspernatur cumque, deserunt aut
            necessitatibus voluptas. Voluptate.
            Fugit harum vero nobis eveniet a! Nisi possimus optio dolores numquam illo sequi autem, quibusdam fugiat
            pariatur, alias neque consectetur quaerat deserunt. Debitis numquam, qui dolorem aut nulla maxime labore!
            Omnis deleniti quasi nihil excepturi architecto, eum repellat unde dolores exercitationem quis, sequi recusandae
            repellendus placeat modi quisquam quam mollitia magnam accusantium cum, commodi sit. Dolorum ad itaque
            cupiditate consequatur.
            Quis unde corporis aliquid, animi possimus perspiciatis. Inventore, quo! Distinctio, aspernatur necessitatibus
            tenetur, adipisci sint ipsa a dolor commodi veniam dolores consequatur error voluptatum recusandae delectus
            iste, nam fuga veritatis?
            Nobis et facilis fugit, quo quibusdam voluptatum ducimus debitis molestiae quia cum ipsum delectus ad odit
            aliquid ut sint architecto deleniti, adipisci laudantium nemo sequi eius. Officiis doloremque quo laborum?
            Nisi error quibusdam perspiciatis facilis quisquam explicabo voluptates ea ad blanditiis sint eaque deserunt
            libero distinctio tenetur fuga mollitia velit iste, praesentium ullam cupiditate? Nam molestiae vel consequuntur
            rem error.
            Quaerat adipisci non, impedit modi doloribus blanditiis a ullam atque nam asperiores aspernatur, tempore,
            officia error sunt quo corporis accusamus eos laudantium quasi necessitatibus fuga exercitationem sint fugit.
            Sed, sit?
        </p>
    </MainWrapper>
</template>
