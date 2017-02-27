<template>
    <div class="modalWrapper">
        <div class="card">
            <div class="card-header">
                Modal Popup
            </div>
            <div class="card-block">
                <modal
                    :text.sync="'Modal Popup Open'"
                    :title.sync="'알람'"
                    :style.sync="'primary'"
                    :message.sync="'확인되었습니다.'"
                    :buttons.sync="[
                        {
                            text: '확인',
                            action: completePopup,
                            style: 'primary'
                        }
                    ]"
                >
                </modal>
                <modal
                    :text.sync="'Modal Popup Open'"
                    :title.sync="'알람'"
                    :style.sync="'warning'"
                    :message.sync="'확인되었습니다.'"
                    :buttons.sync="[
                        {
                            text: '확인',
                            action: completePopup,
                            style: 'primary'
                        }
                    ]"
                >
                </modal>
                <modal
                    :text.sync="'Modal Popup Open'"
                    :title.sync="'알람'"
                    :style.sync="'success'"
                    :message.sync="'확인되었습니다.'"
                    :buttons.sync="[
                        {
                            text: '확인',
                            action: completePopup,
                            style: 'primary'
                        }
                    ]"
                >
                </modal>
            </div>
        </div>
    </div>
</template>
<script>
    import Modal from '../../components/UiElements/Modal.vue';

    export default {
        methods: {
            completePopup: function () {
                console.log('complete');
            }
        },
        components: {
            modal: Modal
        }
    }
</script>
<style>

</style>
